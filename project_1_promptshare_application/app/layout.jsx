import '@/styles/globals.css'; // Assurez-vous que l'import est correct
import Nav  from '@/components/Nav' ; 
import Provider  from '@/components/Provider' ; 
export const metadata = {
  title: 'PromptShare Application',
  description: 'A beautiful application for sharing your AI best prompts',
};

export default function RootLayout({ children }) {  // Utilisation correcte de `children`
  return (
    <html lang="en">
      <body>
       <Provider>
       <div className="main">
          <div className="gradient" />
        </div>
        <div className="main">
          <main>
            <Nav></Nav>
            {children}  {/* C'est ici que le contenu de la page (Home) est rendu */}
          </main>
        </div>
       </Provider>
      </body>
    </html>
  );
}
