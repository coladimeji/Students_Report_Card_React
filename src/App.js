
import React, { useState, useEffect, useCallback } from 'react';

const App = () => {
  const [textValues, setTextValues] = useState({
    textxto: 'Christopher Oladimeji',
    textTwenty: '2022/23',
    textTen: 'Ten',
    textSec: 'Second',
    textGradeLa: 'O',
    textGradeRe2: 'S',
    textGradePre3: 'FS',
    textGradeGeo4: 'NSH',
    textGrade5Earth: 'S',
    textSocial: 'O',
    textArtGrade7: 'S',
    textGrade2Puntual: 'O',
    textGrade2NeatO: 'S',
    textGrade2Polite: 'O',
    // ... other default values for text elements ...
  });

  const handleTextChange = (id, value) => {
    setTextValues(prev => ({ ...prev, [id]: value }));
  };

  const updateSVGText = useCallback(() => {
    const svgObject = document.getElementById('reportCardSvg');
    if (svgObject && svgObject.contentDocument) {
      const svgDocument = svgObject.contentDocument;

      Object.entries(textValues).forEach(([id, value]) => {
        const textElement = svgDocument.getElementById(id);
        if (textElement) textElement.textContent = value;
      });
    }
  }, [textValues]);

  useEffect(() => {
    updateSVGText();
  }, [updateSVGText]); // Dependency is now the useCallback reference

  const resetToDefault = () => {
    setTextValues({
      textxto: 'Christopher Oladimeji',
      textTwenty: '2022/23',
      textTen: 'Ten',
      textSec: 'Second',
      textGradeLa: 'O',
      textGradeRe2: 'S',
      textGradePre3: 'FS',
      textGradeGeo4: 'NSH',
      textGrade5Earth: 'S',
      textSocial: 'O',
      textArtGrade7: 'S',
      textGrade2Puntual: 'O',
      textGrade2NeatO: 'S',
      textGrade2Polite: 'O',
      // ... other default values for text elements ...
    });
  };

  return (
    <div>
      <object id="reportCardSvg" type="image/svg+xml" data="/ReportCard.svg" width="210mm" height="297mm">
        Your browser does not support SVG
      </object>

      {/* Form for updating text */}
      <form>
        {Object.entries(textValues).map(([id, value]) => (
          <label key={id}>
            {id}:
            <input type="text" value={value} onChange={(e) => handleTextChange(id, e.target.value)} />
          </label>
        ))}
      </form>

      <button onClick={updateSVGText}>Update Text</button>
      <button onClick={resetToDefault}>Reset to Default</button>
    </div>
  );
};

export default App;


