import { Grade } from './types';

export const CLASS_MATERIALS: Record<Grade, Record<string, string[]>> = {
  X: {
    'Text Types': [
      'Descriptive Text',
      'Recount Text',
      'Narrative Text',
      'Procedure Text',
    ],
    'Grammar': [
      'Simple Present Tense',
      'Present Continuous Tense',
      'Simple Past Tense',
      'Past Continuous Tense',
      'Pronouns',
    ],
    'Functional Skills (Expressions)': [
      'Introducing Oneself & Others',
      'Complimenting & Congratulating',
      'Expressing Intention',
    ],
    'Differentiated Learning': [
        'Understanding Descriptive Text',
        'Mastering Simple Present Tense',
        'Crafting a Recount Text',
    ],
  },
  XI: {
    'Text Types': [
        'Analytical Exposition',
        'Hortatory Exposition',
        'Explanation Text',
        'Personal Letter',
    ],
    'Grammar': [
        'Conditional Sentences (If Clauses)',
        'Passive Voice',
        'Modals',
        'Cause and Effect',
        'Reported Speech (Indirect Speech)',
    ],
    'Functional Skills (Expressions)': [
        'Giving & Asking Opinions',
        'Giving Suggestions',
    ],
    'Differentiated Learning': [
        'Building an Analytical Exposition',
        'Understanding Passive Voice',
        'Using Conditional Sentences',
    ],
  },
  XII: {
    'Text Types': [
        'Discussion Text',
        'News Item Text',
        'Review Text',
        'Application Letter & CV',
        'Song Lyrics Analysis',
        'Image Captions',
    ],
    'Grammar': [
        'Present Perfect Tense',
        'Past Perfect Tense',
        'Future Tenses Review',
        'Gerunds & Infinitives',
        'Review of All Tenses',
    ],
    'Functional Skills (Expressions)': [
        'How to do a Presentation',
        'Job Interview Questions',
    ],
    'Differentiated Learning': [
        'Analyzing News Items',
        'Writing an Application Letter',
        'Mastering Present Perfect Tense',
    ],
  },
};