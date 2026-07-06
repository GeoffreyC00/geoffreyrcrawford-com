/**
 * Centralized photography references. One image per purpose — see the creative
 * direction in the commit history. Update a path here to swap an image
 * everywhere it's used. Documentary photos by Think Media.
 */
export const photos = {
  /** Home hero — transparent cutout portrait, arms crossed. */
  headshot: {
    src: "/images/geoffrey-crawford-headshot.png",
    alt: "Geoffrey Crawford professional headshot",
    width: 859,
    height: 1172,
  },
  /** @deprecated Use photos.headshot — kept for backward compatibility */
  portraitHero: {
    src: "/images/geoffrey-crawford-headshot.png",
    alt: "Geoffrey Crawford professional headshot",
    width: 859,
    height: 1172,
  },
  /** About hero — contemplative environmental portrait. */
  portraitEditorial: {
    src: "/images/photography/portrait-editorial.jpg",
    alt: "Geoffrey R. Crawford seated, in thought, soft daylight",
  },
  /** About hero — confident standing environmental portrait. */
  portraitStanding: {
    src: "/images/photography/portrait-standing.jpg",
    alt: "Geoffrey R. Crawford standing in a daylit studio",
  },
  /** Contact — clean studio profile portrait. */
  portraitStudio: {
    src: "/images/photography/portrait-studio.jpg",
    alt: "Studio portrait of Geoffrey R. Crawford",
  },
  /** Home brand band — operating a cinema camera. */
  productionCamera: {
    src: "/images/photography/production-camera.jpg",
    alt: "Geoffrey R. Crawford operating a cinema camera on set",
  },
  /** About — teaching at a whiteboard. */
  speakingWhiteboard: {
    src: "/images/geoffrey-crawford-speaking.jpg",
    alt: "Geoffrey Crawford speaking during a marketing strategy session",
    width: 683,
    height: 1024,
  },
  /** About documentary — leading a working conversation. */
  collaborationMeeting: {
    src: "/images/photography/collaboration-meeting.jpg",
    alt: "Geoffrey R. Crawford in a working session at a table",
  },
  /** Work band — advising at a mastermind. */
  collaborationMastermind: {
    src: "/images/photography/collaboration-mastermind.jpg",
    alt: "Geoffrey R. Crawford in discussion at a mastermind session",
  },
} as const;
