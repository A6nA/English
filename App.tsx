import React, { useState } from 'react';
import { Section, Grade } from './types';
import Header from './components/shared/Header';
import Dashboard from './components/Dashboard';
import GrammarSection from './components/GrammarSection';
import ReadingSection from './components/ReadingSection';
import WritingSection from './components/WritingSection';
import ListeningSection from './components/ListeningSection';
import SpeakingSection from './components/SpeakingSection';
import GradeSelection from './components/GradeSelection';
import VocabularySection from './components/VocabularySection';
import ExamsSection from './components/ExamsSection';
import TextTypesSection from './components/TextTypesSection';
import DeepLearningSection from './components/DeepLearningSection';
import DifferentiatedLearningSection from './components/DifferentiatedLearningSection';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.DASHBOARD);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);

  const navigateTo = (section: Section) => {
    setCurrentSection(section);
  };
  
  const handleGradeChange = () => {
    setSelectedGrade(null);
    setCurrentSection(Section.DASHBOARD);
  }

  const renderSection = () => {
    if (!selectedGrade) {
        return null;
    }
    switch (currentSection) {
      case Section.GRAMMAR:
        return <GrammarSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.TEXT_TYPES:
        return <TextTypesSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.READING:
        return <ReadingSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.WRITING:
        return <WritingSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.LISTENING:
        return <ListeningSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.SPEAKING:
        return <SpeakingSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.VOCABULARY:
        return <VocabularySection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.EXAMS:
        return <ExamsSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.DEEP_LEARNING:
        return <DeepLearningSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.DIFFERENTIATED_LEARNING:
        return <DifferentiatedLearningSection navigateTo={navigateTo} grade={selectedGrade} />;
      case Section.DASHBOARD:
      default:
        return <Dashboard navigateTo={navigateTo} grade={selectedGrade} onChangeGrade={handleGradeChange} />;
    }
  };
  
  if (!selectedGrade) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
        <Header />
        <main>
            <GradeSelection onSelectGrade={setSelectedGrade} />
        </main>
         <footer className="text-center py-4 text-slate-500 text-sm">
            <p>Powered by Gemini API for SMK NEGERI 9 HALTENG</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Header />
      <main>
        {renderSection()}
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Powered by Gemini API for SMK NEGERI 9 HALTENG</p>
      </footer>
    </div>
  );
};

export default App;