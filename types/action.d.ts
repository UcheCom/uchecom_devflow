interface SignInWithOAuthParams {
  provider: 'google' | 'github',
  providerAccountId: string;
    user: {
      name: string;
      username: string;
      email: string;
      image?: string;
    }
}

interface AuthCredentials {
  email: string;
  password: string;
  name?: string;
  username?: string;
}

interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
}

interface EditQuestionParams extends CreateQuestionParams {
  questionId: string;
}

interface GetQuestionParams {
  questionId: string;
}