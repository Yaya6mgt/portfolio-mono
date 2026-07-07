import { LanguageProvider } from './contexts/language/LanguageContext';
import { ThemeProvider } from './contexts/theme/ThemeContext';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </ThemeProvider>
  );
}
