import React from 'react';
import { Metadata } from 'next';
import Hero from '../../components/home/Hero';
import FeaturedAgents from '../../components/home/FeaturedAgents';
import { APP_NAME, APP_SLOGAN } from '../../constants';

export const metadata: Metadata = {
  title: `Accueil | ${APP_NAME}`,
  description: APP_SLOGAN,
};

/**
 * Page d'accueil de AgentMarket
 * 
 * Affiche le slogan principal, les boutons CTA et une sélection d'agents en vedette
 */
export default function Page() {
  return (
    <>
      <Hero />
      
      <FeaturedAgents />
      
      {/* Section des avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir AgentMarket ?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Une marketplace conçue pour faciliter la connexion entre créateurs d&apos;agents IA et entreprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avantage 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Trouvez l&apos;agent idéal</h3>
              <p className="text-gray-600 text-center">
                Notre catalogue filtrable vous permet de trouver rapidement l&apos;agent IA qui répond à vos besoins spécifiques.
              </p>
            </div>
            
            {/* Avantage 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Qualité garantie</h3>
              <p className="text-gray-600 text-center">
                Tous nos agents IA sont évalués et testés pour garantir leur performance et leur fiabilité.
              </p>
            </div>
            
            {/* Avantage 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Prospection facilitée</h3>
              <p className="text-gray-600 text-center">
                Les créateurs bénéficient d&apos;outils de prospection automatisés pour connecter leur agent avec les entreprises intéressées.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section témoignages (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que nos utilisateurs disent
            </h2>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 max-w-2xl mx-auto">
            <p className="text-gray-700 italic mb-4">
              "AgentMarket nous a permis de trouver exactement l&apos;agent IA dont nous avions besoin pour 
              automatiser notre service client. L&apos;implémentation a été rapide et les résultats sont 
              impressionnants."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Sophie Martin</p>
                <p className="text-sm text-gray-500">Directrice des Opérations, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
