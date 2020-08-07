

export function getSurvey(): Promise<any> {
  return fetch('/api/survey').then((result) => result.json());
}

