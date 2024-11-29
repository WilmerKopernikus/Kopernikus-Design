"use client"; // Add this at the top of the file

import React, { useEffect, useState, useCallback } from 'react';

const Card1 = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const txt1 = 'This is Kopernikus Design.';
  const txt2 = 'Where imagination meets digital innovation.';
  const txt3 = 'We create. We code. We deliver.';
  const speed = 20;

  const typeWriter = useCallback((text, setText, i = 0, callback) => {
    if (i < text.length) {
      setText((prev) => prev + text.charAt(i));
      setTimeout(() => typeWriter(text, setText, i + 1, callback), speed);
    } else if (callback) {
      callback();
    }
  }, [speed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedTyping) {
            setHasStartedTyping(true);

            typeWriter(txt1, setLine1, 0, () => {
              typeWriter(txt2, setLine2, 0, () => {
                typeWriter(txt3, setLine3);
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('card1');
    if (target) observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasStartedTyping, typeWriter, txt1, txt2, txt3]);

  return (
    <div id="card1" className="card" style={{ height: '100vh' }}>
      <div className="intro-body card-body">
        <h1 id="line1">{line1}</h1>
        <p id="line2">{line2}</p>
        <p id="line3">{line3}</p>
      </div>
    </div>
  );
};

export default Card1;
