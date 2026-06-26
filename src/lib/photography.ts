/**
 * Centralized photography references. One image per purpose — see the creative
 * direction in the commit history. Update a path here to swap an image
 * everywhere it's used. Documentary photos by Think Media.
 */
export const photos = {
  /** Home hero — transparent cutout portrait, arms crossed, for the dark theme. */
  portraitHero: {
    src: "/images/photography/portrait-hero.png",
    alt: "Geoffrey R. Crawford, arms crossed, confident studio portrait",
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
  /** About feature — teaching at a whiteboard. */
  speakingWhiteboard: {
    src: "/images/photography/speaking-whiteboard.jpg",
    alt: "Geoffrey R. Crawford teaching in front of a whiteboard",
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
