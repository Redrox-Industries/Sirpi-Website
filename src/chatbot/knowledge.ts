import { sampleProjects, services, site } from '../data/site';

const serviceNames = services.map((service) => service.title).join(', ');
const projectNames = sampleProjects.map((project) => project.title).join(', ');

export const chatbotSuggestions = [
  'What services do you offer?',
  'How do I start a project?',
  'Can I see your projects?',
] as const;

export function answerQuestion(question: string): string {
  const query = question.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

  if (/service|offer|design|renovat|residential|commercial|styling/.test(query)) {
    return `Our current service areas are ${serviceNames}. These offerings are awaiting studio approval, so contact the studio for confirmed scope.`;
  }

  if (/project|portfolio|work|gallery|example/.test(query)) {
    return `You can explore ${projectNames} on our Projects page. These are fictional layout samples; approved project details and photography are still pending.`;
  }

  if (/start|begin|process|consult|enquir|quote|price|cost|budget/.test(query)) {
    return 'Start with the enquiry form on our Contact page. Share your space type, location, approximate area, budget range, and a short project note. The studio can then respond with confirmed next steps.';
  }

  if (/contact|email|phone|call|location|where|visit/.test(query)) {
    return `Contact details are not yet approved for publication. Please use the enquiry form on our Contact page. Current studio location and service areas also remain unconfirmed.`;
  }

  if (/about|who|sirpi|redrox/.test(query)) {
    return `${site.name} is an interior design studio by ${site.parentCompany}. The website currently presents its design direction while business details and real projects await approval.`;
  }

  return 'I can help with Sirpi Interiors services, sample projects, the enquiry process, and published studio information. I will not invent details that the studio has not approved.';
}
