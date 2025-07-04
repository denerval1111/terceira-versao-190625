// components/Footer.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [emailButtonHover, setEmailButtonHover] = useState(false);
  const [phoneButtonHover, setPhoneButtonHover] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} copiado!`);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      setCopySuccess('Erro ao copiar');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };
  
  return (
    <footer style={{
      backgroundColor: '#343A40',
      color: 'white',
      padding: '3rem 0 2rem',
      marginTop: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Desafio Vitalidade
          </h3>
          <p style={{ 
            color: '#CCC', 
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>
          <SocialIcons />
        </div>
        
        {/* Coluna 2: Links Principais */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Navegação
          </h4>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <Link href="/" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Início</Link>
            <Link href="/sobre/programa" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>O Programa</Link>
            <Link href="/depoimentos" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Depoimentos</Link>
            <Link href="/blog" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Blog</Link>
            <Link href="/contato" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Contato</Link>
          </nav>
        </div>
        
        {/* Coluna 3: Pilares */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Pilares do Programa
          </h4>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <Link href="/pilares/medicina-regenerativa" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Medicina Regenerativa</Link>
            <Link href="/pilares/nutrologia" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Nutrologia</Link>
            <Link href="/pilares/saude-mental" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Saúde Mental</Link>
            <Link href="/pilares/peso-saudavel" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>peso-saudavel</Link>
          </nav>
        </div>
        
        {/* Coluna 4: Contato */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Contato
          </h4>
          
          {/* Email com opções */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ color: '#CCC', marginBottom: '0.5rem' }}>
              <strong>Email:</strong>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a 
                href="mailto:contato@desafiovitalidade.com.br"
                style={{ 
                  color: emailHover ? '#66BB6A' : '#4CAF50',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
              >
                contato@desafiovitalidade.com.br
              </a>
              <button
                onClick={() => copyToClipboard('contato@desafiovitalidade.com.br', 'Email')}
                onMouseEnter={() => setEmailButtonHover(true)}
                onMouseLeave={() => setEmailButtonHover(false)}
                style={{
                  background: emailButtonHover ? '#4CAF50' : 'transparent',
                  border: '1px solid #4CAF50',
                  color: emailButtonHover ? 'white' : '#4CAF50',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
                }}
              >
                📋 Copiar
              </button>
            </div>
          </div>

          {/* Telefone com opções */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ color: '#CCC', marginBottom: '0.5rem' }}>
              <strong>Telefone:</strong>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a 
                href="tel:+5518998179849"
                style={{ 
                  color: phoneHover ? '#66BB6A' : '#4CAF50',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setPhoneHover(true)}
                onMouseLeave={() => setPhoneHover(false)}
              >
                (18) 99817-9849
              </a>
              <button
                onClick={() => copyToClipboard('(18) 99817-9849', 'Telefone')}
                onMouseEnter={() => setPhoneButtonHover(true)}
                onMouseLeave={() => setPhoneButtonHover(false)}
                style={{
                  background: phoneButtonHover ? '#4CAF50' : 'transparent',
                  border: '1px solid #4CAF50',
                  color: phoneButtonHover ? 'white' : '#4CAF50',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
                }}
              >
                📋 Copiar
              </button>
            </div>
          </div>

          {/* Feedback de cópia */}
          {copySuccess && (
            <p style={{ 
              color: '#4CAF50', 
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              ✅ {copySuccess}
            </p>
          )}

          <p style={{ color: '#CCC' }}>
            <strong>Endereço:</strong> Curitiba, PR
          </p>
        </div>
      </div>
      
      {/* Linha de Copyright */}
      <div style={{
        borderTop: '1px solid #555',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        textAlign: 'center'
      }}>
        <p style={{ color: '#AAA', fontSize: '0.9rem' }}>
          © {currentYear} Desafio Vitalidade. Todos os direitos reservados. Site desenvolvido em parceria com ManusAi; chatGPT e Mid Journey
        </p>
      </div>
    </footer>
  );
}










