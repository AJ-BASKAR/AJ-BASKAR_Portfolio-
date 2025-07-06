const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python","SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Databases", 
      skills: ["MySQL", "SQLite", "MongoDB"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      skills: [ "Pandas", "NumPy", "Matplotlib","Seaborn" ,"Scikit-learn" ,"TensorFlow" ,"LSTM", "Firebase","Git", "Docker", "AWS", ],

      color: "from-purple-500 to-pink-500"
    },
    {
      title: " Visualization & BI",

      skills: ["Power BI", "Excel","Matplotlib" ,"Seaborn",],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Web & Deployment",

      skills: ["Streamlit","Flask" ,"Heroku" ,"Render","Git","GitHub" ,"Jupyter Notebook" ,"Docker",],
      color: "from-orange-500 to-red-500"
    }

    
  ];
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      return stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
