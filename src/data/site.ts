export const newTab = { target: '_blank', rel: 'noopener noreferrer' };

export const resumeUrl = '/ajith_kumar.pdf';
export const email = 'kumarajith1996@gmail.com';
export const youtubeUrl = 'https://www.youtube.com/@kumaji_';

export const navLinks = [
  { label: 'Résumé', href: resumeUrl },
  { label: 'GitHub', href: 'https://github.com/kumarajith' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajithk96/' },
  { label: 'YouTube', href: youtubeUrl },
  { label: 'Twitch', href: 'https://twitch.tv/kumajiii' },
];

export const work = {
  intro:
    'Senior Fullstack Engineer (SDE-4) at ACV Auctions, now part of Copart. Before that, ZoomRx, from 2018 to 2025.',
  stack: 'Node.js, TypeScript, NestJS, AWS, AWS CDK, FastAPI, Laravel',
  certification: {
    label: 'AWS Certified Solutions Architect, Professional',
    href: 'https://www.credly.com/badges/c79f5026-b8c2-413a-ab3a-7c972faca3d6/public_url',
  },
  highlights: [
    {
      title: 'Design systems end to end',
      body: 'I designed the cloud architecture for replatforming a core ACV application, with infrastructure in AWS CDK and approval-gated deployments.',
    },
    {
      title: 'Keep production healthy',
      body: 'I moved a vehicle-history API used by five internal services from Heroku to AWS Fargate with zero downtime, and share on-call with teams in Ireland.',
    },
    {
      title: 'Make slow things fast',
      body: "I cut average query latency by 50% on Synapse, ZoomRx's survey analytics platform, and proved it by replaying two years of real queries.",
    },
    {
      title: 'Ship AI features',
      body: 'I built the FastAPI backend for an LLM market-research platform at ZoomRx, with RAG retrieval and responses streamed over SSE.',
    },
  ],
};

export const featuredProjects = [
  {
    title: 'Movie Night Bot',
    href: 'https://github.com/kumarajith/watchparty-bot',
    body: 'Discord controls for movie-night screen shares, so anyone on the call can play, pause and seek. Works with Netflix, Prime Video and VLC.',
    meta: '2026. Node.js, Chrome extension, Discord API',
  },
  {
    title: 'Spotter',
    href: 'https://github.com/kumarajith/Spotter',
    body: 'A serverless Discord bot for workout streaks, heatmaps and leaderboards. It has run for over six months at $0 a month.',
    meta: '2026. Node.js, AWS Lambda, DynamoDB, AWS CDK',
  },
];

export const microsoftStoreUrl = 'https://apps.microsoft.com/detail/9npxbvrgrdh3';
export const bulkClipTrimmerRepo = 'https://github.com/kumarajith/bulk-clip-trimmer';

export const otherProjects: {
  title: string;
  href?: string;
  body: string;
  storeUrl?: string;
  year: string;
}[] = [
  {
    title: 'Bulk Clip Trimmer',
    href: bulkClipTrimmerRepo,
    body: 'A desktop app for getting through huge piles of gaming clips. On the',
    storeUrl: microsoftStoreUrl,
    year: '2024',
  },
  {
    title: 'Local Music Bot',
    href: 'https://github.com/kumarajith/LocalMusicBot',
    body: 'Streams music from a home server into voice channels, built after the popular bots got banned.',
    year: '2022',
  },
  {
    title: 'Vir',
    body: "A multiplayer web version of a client's board game, with local and online play.",
    year: '2020',
  },
  {
    title: 'Project Swarm',
    body: 'A strategy puzzle game with multiple levels, built in Unity.',
    year: '2018',
  },
  {
    title: 'Tigers vs Goats',
    body: 'A digital version of a popular Indian board game, built in Unity as a college project.',
    year: '2017',
  },
];
