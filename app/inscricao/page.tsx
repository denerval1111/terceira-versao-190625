'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import ActionButton from '@/components/ActionButton';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  objetivo: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  objetivo?: string;
}

export default function InscricaoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    objetivo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Limpar erro quando o usuário começa a digitar
  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.objetivo) {
      newErrors.objetivo = 'Selecione um objetivo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulário enviado:', formData);
      setSubmitted(true);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem 1rem'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Inscreva-se no Desafio Vitalidade
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Transforme sua saúde e bem-estar em apenas 30 dias com nosso programa cientificamente desenvolvido.
        </p>
      </div>

      {/* Google Forms Container */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem'
          }}>
            Formulário de Inscrição
          </h2>
          <p style={{
            fontSize: '1rem',
            opacity: 0.9
          }}>
            Preencha seus dados para garantir sua vaga
          </p>
        </div>

        {/* Google Forms Iframe */}
        <div style={{
          padding: '1rem',
          backgroundColor: '#f8f9fa'
        }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdbWaC9kXhYtuCu3wPrHrw7Yw_kck7lxQcG64wTmDpYyxyoEA/viewform?embedded=true" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            style={{
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'white'
            }}
          >
            Carregando formulário de inscrição...
          </iframe>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div style={{
        maxWidth: '800px',
        margin: '3rem auto 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          Por que participar do Desafio Vitalidade?
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              fontSize: '1.25rem',
              color: '#2E8B57',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Baseado em Ciência
            </h4>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.5'
            }}>
              Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              fontSize: '1.25rem',
              color: '#2E8B57',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Resultados Comprovados
            </h4>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.5'
            }}>
              Centenas de participantes já transformaram sua saúde e qualidade de vida com nosso programa.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              fontSize: '1.25rem',
              color: '#2E8B57',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Abordagem Multidisciplinar
            </h4>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.5'
            }}>
              Combinamos medicina regenerativa, nutrição e saúde mental para uma transformação completa.
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#FFD700'
          }}>
            🎯 O que você vai receber:
          </h4>
          <div style={{
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>✅ Plano alimentar personalizado</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Rotina de exercícios adaptada</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Técnicas de gerenciamento de estresse</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Acompanhamento semanal</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Grupo exclusivo de apoio</p>
            <p style={{ marginBottom: '0.5rem' }}>✅ Material educativo completo</p>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          <p>
            Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.
          </p>
        </div>
      </div>
    </div>
  );
}



