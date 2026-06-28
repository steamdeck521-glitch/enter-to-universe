// src/lib/validators.ts
// Form validation utilities

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateClassCode = (code: string): boolean => {
  return /^[A-Z0-9]{6}$/.test(code.toUpperCase());
};

export const validatePhoneNumber = (phone: string): boolean => {
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(phone);
};

export const validateAssignmentTitle = (title: string): boolean => {
  return title.trim().length >= 3 && title.trim().length <= 200;
};

export const validateDueDate = (dueDate: Date): boolean => {
  return new Date(dueDate) > new Date();
};

export const validateScore = (score: number, maxScore: number): boolean => {
  return score >= 0 && score <= maxScore && Number.isInteger(score);
};

export const validateGradeScale = (grade: number): boolean => {
  return grade >= 0 && grade <= 100;
};

export const validateFileSize = (fileSize: number, maxSizeMB: number = 50): boolean => {
  return fileSize <= maxSizeMB * 1024 * 1024;
};

export const validateFileType = (fileName: string, allowedTypes: string[]): boolean => {
  const fileExtension = fileName.split('.').pop()?.toLowerCase() || '';
  return allowedTypes.includes(fileExtension);
};

// Form data validators
export const validateLoginForm = (email: string, password: string) => {
  const errors: Record<string, string> = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateRegisterForm = (
  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string
) => {
  const errors: Record<string, string> = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    errors.password = passwordValidation.errors[0];
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!firstName || !validateName(firstName)) {
    errors.firstName = 'Please enter a valid first name';
  }

  if (!lastName || !validateName(lastName)) {
    errors.lastName = 'Please enter a valid last name';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateCreateAssignmentForm = (
  title: string,
  dueDate: Date,
  pointsTotal: number
) => {
  const errors: Record<string, string> = {};

  if (!title || !validateAssignmentTitle(title)) {
    errors.title = 'Please enter a valid assignment title (3-200 characters)';
  }

  if (!dueDate || !validateDueDate(dueDate)) {
    errors.dueDate = 'Due date must be in the future';
  }

  if (!pointsTotal || pointsTotal <= 0 || pointsTotal > 1000) {
    errors.pointsTotal = 'Points must be between 1 and 1000';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateGradeForm = (
  score: number,
  maxScore: number,
  feedback?: string
) => {
  const errors: Record<string, string> = {};

  if (!validateScore(score, maxScore)) {
    errors.score = `Score must be between 0 and ${maxScore}`;
  }

  if (feedback && feedback.length > 1000) {
    errors.feedback = 'Feedback must not exceed 1000 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
