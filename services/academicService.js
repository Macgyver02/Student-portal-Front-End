export const getGrades = async () => {
    // In a real application, you would make an API call here
    // For now, we'll return mock data
    return [
      { id: 1, course: 'Mathematics', grade: 'A', semester: 'Fall 2023' },
      { id: 2, course: 'Physics', grade: 'B+', semester: 'Fall 2023' },
      // ... more grades
    ];
  };