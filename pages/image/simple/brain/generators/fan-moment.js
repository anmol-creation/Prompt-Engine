// Generators for Fan Moment Category

// Helper for generic fallback
const formatFanMoment = (role, input, genericContext = "during a public appearance") => {
    if (!input || input.trim() === "") {
        return `Fan moment with a famous ${role.toLowerCase()} ${genericContext}`;
    }
    // Handle cases where input might be in parenthesis in original (e.g. `Fan Moment with Role (${input})`)
    // But the requirement example is `Fan Moment with Actor: Salman Khan`.
    // I will stick to the colon format for named inputs as it is cleaner.
    return `Fan Moment with ${role}: ${input}`;
};

// Helper for parenthetical format (some legacy ones used this)
const formatFanMomentParen = (role, input, genericContext = "during a public appearance") => {
    if (!input || input.trim() === "") {
        return `Fan moment with a famous ${role.toLowerCase()} ${genericContext}`;
    }
    return `Fan Moment with ${role} (${input})`;
};

export const filmStarGenerator = (input) => formatFanMomentParen("Film Star", input, "at a red carpet event");
export const actorGenerator = (input) => formatFanMoment("Actor", input, "during a public appearance");
export const actressGenerator = (input) => formatFanMoment("Actress", input, "during a public appearance");
export const directorGenerator = (input) => formatFanMoment("Director", input, "on a movie set");
export const producerGenerator = (input) => formatFanMoment("Producer", input, "at a premiere");
export const screenwriterGenerator = (input) => formatFanMoment("Screenwriter", input, "at a literary event");
export const musicComposerGenerator = (input) => formatFanMoment("Music Composer", input, "in a studio");
export const playbackSingerGenerator = (input) => formatFanMoment("Playback Singer", input, "at a concert");
export const choreographerGenerator = (input) => formatFanMoment("Choreographer", input, "on a dance floor");
export const cinematographerGenerator = (input) => formatFanMoment("Cinematographer", input, "on set");
export const editorGenerator = (input) => formatFanMoment("Editor", input, "in an editing suite");

// --- SPORTS STARS GENERATORS ---

export const getSportsPrompt = (category, name) => {
    const isNameEmpty = !name || name.trim() === "";
    const namePart = isNameEmpty ? `a famous ${category}` : `${category}: ${name}`;

    return `Generate a realistic fan photo. Fan Moment with ${namePart}. User and sports star must appear in the same frame. Adjust scale, lighting, camera angle naturally. Preserve user identity. No cinematic, fantasy, or dramatic styling. Result must look like a genuine fan moment photo.`;
};

// Top Sports
export const cricketGenerator = (input) => getSportsPrompt('Cricket Player', input);
export const footballGenerator = (input) => getSportsPrompt('Football Player', input);
export const basketballGenerator = (input) => getSportsPrompt('Basketball Player', input);
export const tennisGenerator = (input) => getSportsPrompt('Tennis Player', input);
export const athleticsGenerator = (input) => getSportsPrompt('Athlete', input);

// Other Sports
export const otherSportsGenerator = (input) => getSportsPrompt('Sports Personality', input);

// Legends
export const sportsLegendGenerator = (input) => getSportsPrompt('Sports Legend', input);

// Legacy/Existing Sports Generators
export const sportsStarGenerator = (input) => formatFanMomentParen("Sports Star", input, "at a match");
export const athleteGenerator = (input) => formatFanMoment("Athlete", input, "on the track");
export const teamPlayerGenerator = (input) => formatFanMoment("Team Player", input, "on the field");
export const teamCaptainGenerator = (input) => formatFanMoment("Team Captain", input, "at a press conference");
export const legendGenerator = (input) => formatFanMoment("Legend", input, "at a hall of fame event");
export const coachGenerator = (input) => formatFanMoment("Coach", input, "on the sidelines");
export const trainerGenerator = (input) => formatFanMoment("Trainer", input, "in the gym");
export const commentatorGenerator = (input) => formatFanMoment("Commentator", input, "in the booth");
export const sportsAnalystGenerator = (input) => formatFanMoment("Analyst", input, "on a sports show");

// --- END SPORTS STARS GENERATORS ---

export const musicianGenerator = (input) => formatFanMomentParen("Singer/Musician", input, "at a concert");
export const singerGenerator = (input) => formatFanMoment("Singer", input, "on stage");
export const rapperGenerator = (input) => formatFanMoment("Rapper", input, "in a music video");
export const vocalistGenerator = (input) => formatFanMoment("Vocalist", input, "performing live");
export const composerGenerator = (input) => formatFanMoment("Composer", input, "conducting an orchestra");
export const lyricistGenerator = (input) => formatFanMoment("Lyricist", input, "writing music");
export const musicProducerGenerator = (input) => formatFanMoment("Producer", input, "in a recording studio");
export const instrumentalArtistGenerator = (input) => formatFanMoment("Artist", input, "playing an instrument");
export const bandMemberGenerator = (input) => formatFanMoment("Band Member", input, "backstage");
export const djGenerator = (input) => formatFanMoment("DJ", input, "at a club");
export const performerGenerator = (input) => formatFanMoment("Performer", input, "on stage");

export const politicianGenerator = (input) => formatFanMomentParen("Politician", input, "at a rally");
export const presidentGenerator = (input) => formatFanMoment("President", input, "at the white house");
export const pmGenerator = (input) => formatFanMoment("Prime Minister", input, "at a summit");
export const cmGenerator = (input) => formatFanMoment("Chief Minister", input, "at a public meeting");
export const ministerGenerator = (input) => formatFanMoment("Minister", input, "at a conference");
export const parliamentMemberGenerator = (input) => formatFanMoment("Parliament Member", input, "at the parliament");
export const partyLeaderGenerator = (input) => formatFanMoment("Party Leader", input, "giving a speech");
export const politicalSpeakerGenerator = (input) => formatFanMoment("Political Speaker", input, "at a debate");
export const socialReformLeaderGenerator = (input) => formatFanMoment("Social Reform Leader", input, "at a movement");

export const contentCreatorGenerator = (input) => formatFanMomentParen("Content Creator", input, "filming a video");
export const youtuberGenerator = (input) => formatFanMoment("YouTuber", input, "in their studio");
export const vloggerGenerator = (input) => formatFanMoment("Vlogger", input, "vlogging outside");
export const streamerGenerator = (input) => formatFanMoment("Live Streamer", input, "streaming");
export const gamerGenerator = (input) => formatFanMoment("Gamer", input, "at a gaming event");
export const influencerGenerator = (input) => formatFanMoment("Influencer", input, "at a brand event");
export const shortFormCreatorGenerator = (input) => formatFanMoment("Short-form Creator", input, "recording a reel");
export const educatorGenerator = (input) => formatFanMoment("Educator", input, "teaching");
export const techCreatorGenerator = (input) => formatFanMoment("Tech Creator", input, "reviewing a gadget");

export const businessLeaderGenerator = (input) => formatFanMomentParen("Business Leader", input, "in a boardroom");
export const entrepreneurGenerator = (input) => formatFanMoment("Entrepreneur", input, "pitching an idea");
export const founderGenerator = (input) => formatFanMoment("Startup Founder", input, "at a startup hub");
export const ceoGenerator = (input) => formatFanMoment("CEO", input, "at headquarters");
export const executiveGenerator = (input) => formatFanMoment("Executive", input, "in a meeting");
export const innovatorGenerator = (input) => formatFanMoment("Business Innovator", input, "in a lab");
export const industryLeaderGenerator = (input) => formatFanMoment("Industry Leader", input, "at a keynote");
export const businessSpeakerGenerator = (input) => formatFanMoment("Speaker", input, "on stage");

export const speakerAuthorGenerator = (input) => formatFanMomentParen("Speaker/Author", input, "at a book signing");
export const motivationalSpeakerGenerator = (input) => formatFanMoment("Motivational Speaker", input, "inspiring a crowd");
export const thoughtLeaderGenerator = (input) => formatFanMoment("Thought Leader", input, "at a ted talk");
export const authorGenerator = (input) => formatFanMoment("Author", input, "at a library");
export const bookWriterGenerator = (input) => formatFanMoment("Book Writer", input, "writing");
export const professorGenerator = (input) => formatFanMoment("Professor", input, "lecturing");

export const tvPersonalityGenerator = (input) => formatFanMomentParen("TV Personality", input, "on a talk show");
export const hostGenerator = (input) => formatFanMoment("Host", input, "hosting a show");
export const anchorGenerator = (input) => formatFanMoment("Anchor", input, "reporting news");
export const realityStarGenerator = (input) => formatFanMoment("Star", input, "on a reality set");
export const judgeGenerator = (input) => formatFanMoment("Judge", input, "judging a contest");
export const newsAnchorGenerator = (input) => formatFanMoment("News Anchor", input, "in the newsroom");
export const journalistGenerator = (input) => formatFanMoment("Journalist", input, "reporting live");

export const digitalCelebGenerator = (input) => formatFanMomentParen("Digital Celebrity", input, "at a meet and greet");
export const socialPersonalityGenerator = (input) => formatFanMoment("Social Media Personality", input, "taking a selfie");
export const internetCelebGenerator = (input) => formatFanMoment("Internet Celebrity", input, "going viral");
export const memeCreatorGenerator = (input) => formatFanMoment("Meme Creator", input, "making a meme");
export const trendCreatorGenerator = (input) => formatFanMoment("Trend Creator", input, "starting a trend");

export const globalIconGenerator = (input) => formatFanMomentParen("Global Icon", input, "at a gala");
export const culturalIconGenerator = (input) => formatFanMoment("Cultural Icon", input, "at a cultural event");
export const intlCelebGenerator = (input) => formatFanMoment("International Celebrity", input, "arriving at an airport");
export const multiDomainGenerator = (input) => formatFanMoment("Multi-domain Personality", input, "at a diverse event");
