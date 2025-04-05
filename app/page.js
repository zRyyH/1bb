"use client";

import { useState, useEffect } from "react";
import NotificationBar from "./components/NotificationBar";
import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonial/Testimonials";
import DiscordSection from "./components/Discord/DiscordSection";
import PricingSection from "./components/Pricing/PricingSection";
import FAQSection from "./components/FAQ/FAQSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [countdown, setCountdown] = useState({ hours: 5, minutes: 59, seconds: 59 });
  const [usersOnline, setUsersOnline] = useState(127);
  const [stockLeft, setStockLeft] = useState(14);

  useEffect(() => {
    // Verificar se já existe um contador salvo no localStorage
    const savedCountdown = localStorage.getItem('1bbCountdown');
    const savedTimestamp = localStorage.getItem('1bbTimestamp');

    if (savedCountdown && savedTimestamp) {
      // Calcular quanto tempo passou desde que o contador foi salvo
      const currentTime = new Date().getTime();
      const savedTime = parseInt(savedTimestamp, 10);
      const elapsedSeconds = Math.floor((currentTime - savedTime) / 1000);

      // Recuperar o contador salvo
      const parsedCountdown = JSON.parse(savedCountdown);

      // Calcular o novo contador, subtraindo o tempo decorrido
      let totalSeconds =
        parsedCountdown.hours * 3600 +
        parsedCountdown.minutes * 60 +
        parsedCountdown.seconds - elapsedSeconds;

      // Se o contador chegou a zero, gerar um novo tempo aleatório
      if (totalSeconds <= 0) {
        totalSeconds = gerarTempoAleatorio();
      }

      // Converter de volta para horas, minutos e segundos
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdown({ hours, minutes, seconds });
    } else {
      // Se não existir, criar um novo contador com tempo aleatório
      const totalSeconds = gerarTempoAleatorio();
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const initialCountdown = { hours, minutes, seconds };
      localStorage.setItem('1bbCountdown', JSON.stringify(initialCountdown));
      localStorage.setItem('1bbTimestamp', new Date().getTime().toString());
      setCountdown(initialCountdown);
    }

    // Função para gerar um tempo aleatório entre 2 e 8 horas (em segundos)
    function gerarTempoAleatorio() {
      // Tempo mínimo: 2 horas (7.200 segundos)
      // Tempo máximo: 8 horas (28.800 segundos)
      return Math.floor(Math.random() * (28800 - 7200 + 1)) + 7200;
    }

    // Recuperar usuários online e estoque do localStorage ou usar valores padrão
    const savedUsersOnline = localStorage.getItem('1bbUsersOnline');
    const savedStockLeft = localStorage.getItem('1bbStockLeft');

    if (savedUsersOnline) setUsersOnline(parseInt(savedUsersOnline, 10));
    if (savedStockLeft) setStockLeft(parseInt(savedStockLeft, 10));

    // Configurar o timer do contador
    const timer = setInterval(() => {
      setCountdown(prev => {
        let newCountdown;

        if (prev.seconds > 0) {
          newCountdown = { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          newCountdown = { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          newCountdown = { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Se chegar a zero, gerar um novo tempo aleatório
          const totalSeconds = gerarTempoAleatorio();
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;

          newCountdown = { hours, minutes, seconds };
        }

        // Salvar o novo contador no localStorage
        localStorage.setItem('1bbCountdown', JSON.stringify(newCountdown));
        localStorage.setItem('1bbTimestamp', new Date().getTime().toString());

        return newCountdown;
      });
    }, 1000);

    // Simulação de usuários online flutuantes
    const usersTimer = setInterval(() => {
      setUsersOnline(prev => {
        const newValue = Math.floor(prev + (Math.random() * 2 - 0.5));
        localStorage.setItem('1bbUsersOnline', newValue.toString());
        return newValue;
      });
    }, 5000);

    // Simulação de estoque diminuindo
    const stockTimer = setInterval(() => {
      setStockLeft(prev => {
        let newValue = prev;
        if (prev > 1 && Math.random() > 0.7) {
          newValue = prev - 1;
          localStorage.setItem('1bbStockLeft', newValue.toString());
        }
        return newValue;
      });
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(usersTimer);
      clearInterval(stockTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NotificationBar stockLeft={stockLeft} usersOnline={usersOnline} />
      <Hero countdown={countdown} />
      <Features />
      <Testimonials />
      <DiscordSection />
      <PricingSection />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}