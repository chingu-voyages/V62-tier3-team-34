import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

const TEAM = [
  {
    name: 'Val Lysenko',
    role: 'Scrum Master / Web Developer',
    github: 'https://github.com/Valeriusdev',
    linkedin: 'https://www.linkedin.com/in/valeriylysenko/',
  },
  {
    name: 'Rigo',
    role: 'Web Developer',
    github: 'https://github.com/r1g023',
    linkedin: 'https://www.linkedin.com/in/rigo0101/',
  },
  {
    name: 'Sumi Tharayil',
    role: 'UX / UI Designer / Web Developer',
    github: 'https://github.com/ci-sumi',
    linkedin: 'https://www.linkedin.com/in/sumi-tharayil/',
  },
  {
    name: 'Katia',
    role: 'Web Developer',
    github: 'https://github.com/katiaku',
    linkedin: 'https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova/',
  },
  {
    name: 'Hala',
    role: 'Web Developer',
    github: 'https://github.com/HalaMadi',
    linkedin: 'https://www.linkedin.com/in/hala-madi8/',
  },
  {
    name: 'Ruth Westnidge',
    role: 'Web Developer',
    github: 'https://github.com/rhw-repo',
    linkedin: 'https://www.linkedin.com/in/ruth-westnidge/',
  },
  {
    name: 'Nahul',
    role: 'Web Developer',
    github: 'https://github.com/nahul100',
    linkedin: 'https://www.linkedin.com/in/julker-nain-62aa8b2b2/',
  },
];

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a footer landmark', () => {
    expect(compiled.querySelector('footer')).toBeTruthy();
  });

  it('should label the team section with the app name heading', () => {
    const section = compiled.querySelector('section[aria-labelledby="team-heading"]');
    const heading = compiled.querySelector('#team-heading');

    expect(section).toBeTruthy();
    expect(heading?.tagName).toBe('H2');
    expect(heading?.textContent?.trim()).toBe('Chingu Book Club');
  });

  it('should render one card per team member', () => {
    expect(compiled.querySelectorAll('section[aria-labelledby="team-heading"] li')).toHaveLength(
      TEAM.length,
    );
  });

  it.each(TEAM)('should render $name with their role', ({ name, role }) => {
    const card = Array.from(compiled.querySelectorAll('li')).find(
      (li) => li.querySelector('p')?.textContent?.trim() === name,
    );

    expect(card).toBeTruthy();
    expect(card?.textContent).toContain(role);
  });

  it.each(TEAM)('should link to the GitHub and LinkedIn profiles of $name', (member) => {
    const github = compiled.querySelector<HTMLAnchorElement>(
      `a[aria-label="${member.name} on GitHub (opens in new tab)"]`,
    );
    const linkedin = compiled.querySelector<HTMLAnchorElement>(
      `a[aria-label="${member.name} on LinkedIn (opens in new tab)"]`,
    );

    expect(github?.getAttribute('href')).toBe(member.github);
    expect(linkedin?.getAttribute('href')).toBe(member.linkedin);
  });

  it('should link to the project repository', () => {
    const repo = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://github.com/chingu-voyages/V62-tier3-team-34"]',
    );

    expect(repo).toBeTruthy();
    expect(repo?.textContent).toContain('GitHub Repository');
    expect(repo?.textContent).toContain('(opens in new tab)');
  });

  it('should open every external link in a new tab safely', () => {
    const links = compiled.querySelectorAll('a[href^="http"]');

    expect(links).toHaveLength(TEAM.length * 2 + 1);
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  it('should list the technologies with alt text', () => {
    const alts = Array.from(compiled.querySelectorAll('h3 + ul img')).map((img) =>
      img.getAttribute('alt'),
    );

    expect(alts).toEqual(['Angular', 'TypeScript', 'Tailwind CSS', 'Figma', '.NET']);
  });

  it.each([
    { heading: 'Explore', links: ['Reading Lists', 'Past Sessions', 'Club Archive'] },
    { heading: 'Connect', links: ['Instagram', 'Substack', 'Community Slack'] },
  ])('should render the $heading navigation', ({ heading, links }) => {
    const nav = Array.from(compiled.querySelectorAll('nav')).find(
      (el) => el.querySelector('h3')?.textContent?.trim() === heading,
    );
    const labels = Array.from(nav?.querySelectorAll('a') ?? []).map((a) => a.textContent?.trim());

    expect(nav?.getAttribute('aria-labelledby')).toBe(nav?.querySelector('h3')?.id);
    expect(labels).toEqual(links);
  });

  it('should hide decorative icons inside links from screen readers', () => {
    compiled.querySelectorAll('a img').forEach((img) => {
      expect(img.getAttribute('alt')).toBe('');
    });
  });

  it('should show the current year in the copyright notice', () => {
    const year = new Date().getFullYear();

    expect(compiled.textContent).toContain(`© ${year} Chingu Book Club. All rights reserved.`);
  });
});
