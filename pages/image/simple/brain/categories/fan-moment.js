// Category Data for Fan Moment
import * as Generators from '../generators/fan-moment.js';

export const fanMomentCategory = {
    type: 'group',
    options: {
        "Film Stars": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.filmStarGenerator,
            options: {
                "Actors": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type actor...",
                    customGenerator: Generators.actorGenerator,
                    options: {
                        "Leonardo DiCaprio": { type: "static", prompt: "Fan Moment with Actor: Leonardo DiCaprio" },
                        "Brad Pitt": { type: "static", prompt: "Fan Moment with Actor: Brad Pitt" },
                        "Tom Cruise": { type: "static", prompt: "Fan Moment with Actor: Tom Cruise" },
                        "Robert Downey Jr.": { type: "static", prompt: "Fan Moment with Actor: Robert Downey Jr." },
                        "Johnny Depp": { type: "static", prompt: "Fan Moment with Actor: Johnny Depp" },
                        "Keanu Reeves": { type: "static", prompt: "Fan Moment with Actor: Keanu Reeves" },
                        "Dwayne Johnson": { type: "static", prompt: "Fan Moment with Actor: Dwayne Johnson" },
                        "Chris Hemsworth": { type: "static", prompt: "Fan Moment with Actor: Chris Hemsworth" },
                        "Will Smith": { type: "static", prompt: "Fan Moment with Actor: Will Smith" },
                        "Christian Bale": { type: "static", prompt: "Fan Moment with Actor: Christian Bale" },
                        "Shah Rukh Khan": { type: "static", prompt: "Fan Moment with Actor: Shah Rukh Khan" },
                        "Salman Khan": { type: "static", prompt: "Fan Moment with Actor: Salman Khan" },
                        "Aamir Khan": { type: "static", prompt: "Fan Moment with Actor: Aamir Khan" },
                        "Hrithik Roshan": { type: "static", prompt: "Fan Moment with Actor: Hrithik Roshan" },
                        "Ranbir Kapoor": { type: "static", prompt: "Fan Moment with Actor: Ranbir Kapoor" },
                        "Akshay Kumar": { type: "static", prompt: "Fan Moment with Actor: Akshay Kumar" },
                        "Ryan Reynolds": { type: "static", prompt: "Fan Moment with Actor: Ryan Reynolds" },
                        "Jason Statham": { type: "static", prompt: "Fan Moment with Actor: Jason Statham" },
                        "Benedict Cumberbatch": { type: "static", prompt: "Fan Moment with Actor: Benedict Cumberbatch" },
                        "Robert Pattinson": { type: "static", prompt: "Fan Moment with Actor: Robert Pattinson" }
                    }
                },
                "Actresses": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type actress...",
                    customGenerator: Generators.actressGenerator,
                    options: {
                        "Scarlett Johansson": { type: "static", prompt: "Fan Moment with Actress: Scarlett Johansson" },
                        "Angelina Jolie": { type: "static", prompt: "Fan Moment with Actress: Angelina Jolie" },
                        "Emma Watson": { type: "static", prompt: "Fan Moment with Actress: Emma Watson" },
                        "Jennifer Lawrence": { type: "static", prompt: "Fan Moment with Actress: Jennifer Lawrence" },
                        "Gal Gadot": { type: "static", prompt: "Fan Moment with Actress: Gal Gadot" },
                        "Natalie Portman": { type: "static", prompt: "Fan Moment with Actress: Natalie Portman" },
                        "Margot Robbie": { type: "static", prompt: "Fan Moment with Actress: Margot Robbie" },
                        "Anne Hathaway": { type: "static", prompt: "Fan Moment with Actress: Anne Hathaway" },
                        "Deepika Padukone": { type: "static", prompt: "Fan Moment with Actress: Deepika Padukone" },
                        "Alia Bhatt": { type: "static", prompt: "Fan Moment with Actress: Alia Bhatt" },
                        "Priyanka Chopra": { type: "static", prompt: "Fan Moment with Actress: Priyanka Chopra" },
                        "Katrina Kaif": { type: "static", prompt: "Fan Moment with Actress: Katrina Kaif" },
                        "Zendaya": { type: "static", prompt: "Fan Moment with Actress: Zendaya" },
                        "Emma Stone": { type: "static", prompt: "Fan Moment with Actress: Emma Stone" },
                        "Aishwarya Rai Bachchan": { type: "static", prompt: "Fan Moment with Actress: Aishwarya Rai Bachchan" }
                    }
                },
                "Directors": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type director...",
                    customGenerator: Generators.directorGenerator,
                    options: {
                        "Christopher Nolan": { type: "static", prompt: "Fan Moment with Director: Christopher Nolan" },
                        "Steven Spielberg": { type: "static", prompt: "Fan Moment with Director: Steven Spielberg" },
                        "James Cameron": { type: "static", prompt: "Fan Moment with Director: James Cameron" },
                        "Martin Scorsese": { type: "static", prompt: "Fan Moment with Director: Martin Scorsese" },
                        "Quentin Tarantino": { type: "static", prompt: "Fan Moment with Director: Quentin Tarantino" },
                        "Ridley Scott": { type: "static", prompt: "Fan Moment with Director: Ridley Scott" },
                        "David Fincher": { type: "static", prompt: "Fan Moment with Director: David Fincher" },
                        "S. S. Rajamouli": { type: "static", prompt: "Fan Moment with Director: S. S. Rajamouli" },
                        "Karan Johar": { type: "static", prompt: "Fan Moment with Director: Karan Johar" },
                        "Sanjay Leela Bhansali": { type: "static", prompt: "Fan Moment with Director: Sanjay Leela Bhansali" }
                    }
                },
                "Producers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type producer...",
                    customGenerator: Generators.producerGenerator,
                    options: {
                        "Kevin Feige": { type: "static", prompt: "Fan Moment with Producer: Kevin Feige" },
                        "Jerry Bruckheimer": { type: "static", prompt: "Fan Moment with Producer: Jerry Bruckheimer" },
                        "Kathleen Kennedy": { type: "static", prompt: "Fan Moment with Producer: Kathleen Kennedy" },
                        "Aditya Chopra": { type: "static", prompt: "Fan Moment with Producer: Aditya Chopra" },
                        "Karan Johar": { type: "static", prompt: "Fan Moment with Producer: Karan Johar" },
                        "Sajid Nadiadwala": { type: "static", prompt: "Fan Moment with Producer: Sajid Nadiadwala" },
                        "Boney Kapoor": { type: "static", prompt: "Fan Moment with Producer: Boney Kapoor" },
                        "Ron Howard": { type: "static", prompt: "Fan Moment with Producer: Ron Howard" },
                        "J. J. Abrams": { type: "static", prompt: "Fan Moment with Producer: J. J. Abrams" },
                        "Guneet Monga": { type: "static", prompt: "Fan Moment with Producer: Guneet Monga" }
                    }
                },
                "Screenwriters": { type: "group", enableType: true, searchPlaceholder: "Type screenwriter...", customGenerator: Generators.screenwriterGenerator, options: {} },
                "Music Composers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type composer...",
                    customGenerator: Generators.musicComposerGenerator,
                    options: {
                        "A. R. Rahman": { type: "static", prompt: "Fan Moment with Music Composer: A. R. Rahman" },
                        "Hans Zimmer": { type: "static", prompt: "Fan Moment with Music Composer: Hans Zimmer" },
                        "John Williams": { type: "static", prompt: "Fan Moment with Music Composer: John Williams" },
                        "Pritam": { type: "static", prompt: "Fan Moment with Music Composer: Pritam" },
                        "Anirudh Ravichander": { type: "static", prompt: "Fan Moment with Music Composer: Anirudh Ravichander" }
                    }
                },
                "Playback Singers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type singer...",
                    customGenerator: Generators.playbackSingerGenerator,
                    options: {
                        "Arijit Singh": { type: "static", prompt: "Fan Moment with Playback Singer: Arijit Singh" },
                        "Lata Mangeshkar": { type: "static", prompt: "Fan Moment with Playback Singer: Lata Mangeshkar" },
                        "Sonu Nigam": { type: "static", prompt: "Fan Moment with Playback Singer: Sonu Nigam" },
                        "Shreya Ghoshal": { type: "static", prompt: "Fan Moment with Playback Singer: Shreya Ghoshal" },
                        "Udit Narayan": { type: "static", prompt: "Fan Moment with Playback Singer: Udit Narayan" }
                    }
                },
                "Choreographers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type choreographer...",
                    customGenerator: Generators.choreographerGenerator,
                    options: {
                        "Prabhu Deva": { type: "static", prompt: "Fan Moment with Choreographer: Prabhu Deva" },
                        "Remo D'Souza": { type: "static", prompt: "Fan Moment with Choreographer: Remo D'Souza" },
                        "Farah Khan": { type: "static", prompt: "Fan Moment with Choreographer: Farah Khan" },
                        "Ganesh Acharya": { type: "static", prompt: "Fan Moment with Choreographer: Ganesh Acharya" },
                        "Punit Malhotra": { type: "static", prompt: "Fan Moment with Choreographer: Punit Malhotra" }
                    }
                },
                "Cinematographers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type cinematographer...",
                    customGenerator: Generators.cinematographerGenerator,
                    options: {
                        "Roger Deakins": { type: "static", prompt: "Fan Moment with Cinematographer: Roger Deakins" },
                        "Emmanuel Lubezki": { type: "static", prompt: "Fan Moment with Cinematographer: Emmanuel Lubezki" },
                        "Wally Pfister": { type: "static", prompt: "Fan Moment with Cinematographer: Wally Pfister" },
                        "Santosh Sivan": { type: "static", prompt: "Fan Moment with Cinematographer: Santosh Sivan" },
                        "Ravi Varman": { type: "static", prompt: "Fan Moment with Cinematographer: Ravi Varman" }
                    }
                },
                "Editors": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type editor...",
                    customGenerator: Generators.editorGenerator,
                    options: {
                        "Thelma Schoonmaker": { type: "static", prompt: "Fan Moment with Editor: Thelma Schoonmaker" },
                        "Lee Smith": { type: "static", prompt: "Fan Moment with Editor: Lee Smith" },
                        "A. Sreekar Prasad": { type: "static", prompt: "Fan Moment with Editor: A. Sreekar Prasad" },
                        "Tom Cross": { type: "static", prompt: "Fan Moment with Editor: Tom Cross" },
                        "Kunal Mehta": { type: "static", prompt: "Fan Moment with Editor: Kunal Mehta" }
                    }
                }
            }
        },
        "Sports Stars": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.sportsStarGenerator,
            options: {
                "Professional Athletes": { type: "group", enableType: true, searchPlaceholder: "Type athlete...", customGenerator: Generators.athleteGenerator, options: {} },
                "Team Players": { type: "group", enableType: true, searchPlaceholder: "Type player...", customGenerator: Generators.teamPlayerGenerator, options: {} },
                "Team Captains": { type: "group", enableType: true, searchPlaceholder: "Type captain...", customGenerator: Generators.teamCaptainGenerator, options: {} },
                "Former Players / Legends": { type: "group", enableType: true, searchPlaceholder: "Type legend...", customGenerator: Generators.legendGenerator, options: {} },
                "Coaches": { type: "group", enableType: true, searchPlaceholder: "Type coach...", customGenerator: Generators.coachGenerator, options: {} },
                "Trainers": { type: "group", enableType: true, searchPlaceholder: "Type trainer...", customGenerator: Generators.trainerGenerator, options: {} },
                "Sports Commentators": { type: "group", enableType: true, searchPlaceholder: "Type commentator...", customGenerator: Generators.commentatorGenerator, options: {} },
                "Sports Analysts": { type: "group", enableType: true, searchPlaceholder: "Type analyst...", customGenerator: Generators.sportsAnalystGenerator, options: {} }
            }
        },
        "Singers & Musicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.musicianGenerator,
            options: {
                "Singers": { type: "group", enableType: true, searchPlaceholder: "Type singer...", customGenerator: Generators.singerGenerator, options: {} },
                "Rappers": { type: "group", enableType: true, searchPlaceholder: "Type rapper...", customGenerator: Generators.rapperGenerator, options: {} },
                "Vocalists": { type: "group", enableType: true, searchPlaceholder: "Type vocalist...", customGenerator: Generators.vocalistGenerator, options: {} },
                "Music Composers": { type: "group", enableType: true, searchPlaceholder: "Type composer...", customGenerator: Generators.composerGenerator, options: {} },
                "Lyricists": { type: "group", enableType: true, searchPlaceholder: "Type lyricist...", customGenerator: Generators.lyricistGenerator, options: {} },
                "Music Producers": { type: "group", enableType: true, searchPlaceholder: "Type producer...", customGenerator: Generators.musicProducerGenerator, options: {} },
                "Instrumental Artists": { type: "group", enableType: true, searchPlaceholder: "Type artist...", customGenerator: Generators.instrumentalArtistGenerator, options: {} },
                "Band Members": { type: "group", enableType: true, searchPlaceholder: "Type member...", customGenerator: Generators.bandMemberGenerator, options: {} },
                "DJs": { type: "group", enableType: true, searchPlaceholder: "Type DJ...", customGenerator: Generators.djGenerator, options: {} },
                "Live Performers": { type: "group", enableType: true, searchPlaceholder: "Type performer...", customGenerator: Generators.performerGenerator, options: {} }
            }
        },
        "Politicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.politicianGenerator,
            options: {
                "Presidents": { type: "group", enableType: true, searchPlaceholder: "Type president...", customGenerator: Generators.presidentGenerator, options: {} },
                "Prime Ministers": { type: "group", enableType: true, searchPlaceholder: "Type PM...", customGenerator: Generators.pmGenerator, options: {} },
                "Chief Ministers": { type: "group", enableType: true, searchPlaceholder: "Type CM...", customGenerator: Generators.cmGenerator, options: {} },
                "Ministers": { type: "group", enableType: true, searchPlaceholder: "Type minister...", customGenerator: Generators.ministerGenerator, options: {} },
                "Parliament Members": { type: "group", enableType: true, searchPlaceholder: "Type member...", customGenerator: Generators.parliamentMemberGenerator, options: {} },
                "Party Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: Generators.partyLeaderGenerator, options: {} },
                "Political Speakers": { type: "group", enableType: true, searchPlaceholder: "Type speaker...", customGenerator: Generators.politicalSpeakerGenerator, options: {} },
                "Social Reform Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: Generators.socialReformLeaderGenerator, options: {} }
            }
        },
        "Content Creators": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.contentCreatorGenerator,
            options: {
                "YouTubers": { type: "group", enableType: true, searchPlaceholder: "Type YouTuber...", customGenerator: Generators.youtuberGenerator, options: {} },
                "Vloggers": { type: "group", enableType: true, searchPlaceholder: "Type vlogger...", customGenerator: Generators.vloggerGenerator, options: {} },
                "Live Streamers": { type: "group", enableType: true, searchPlaceholder: "Type streamer...", customGenerator: Generators.streamerGenerator, options: {} },
                "Gamers": { type: "group", enableType: true, searchPlaceholder: "Type gamer...", customGenerator: Generators.gamerGenerator, options: {} },
                "Influencers": { type: "group", enableType: true, searchPlaceholder: "Type influencer...", customGenerator: Generators.influencerGenerator, options: {} },
                "Short-form Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: Generators.shortFormCreatorGenerator, options: {} },
                "Educators": { type: "group", enableType: true, searchPlaceholder: "Type educator...", customGenerator: Generators.educatorGenerator, options: {} },
                "Tech Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: Generators.techCreatorGenerator, options: {} }
            }
        },
        "Business Leaders": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.businessLeaderGenerator,
            options: {
                "Entrepreneurs": { type: "group", enableType: true, searchPlaceholder: "Type entrepreneur...", customGenerator: Generators.entrepreneurGenerator, options: {} },
                "Startup Founders": { type: "group", enableType: true, searchPlaceholder: "Type founder...", customGenerator: Generators.founderGenerator, options: {} },
                "CEOs": { type: "group", enableType: true, searchPlaceholder: "Type CEO...", customGenerator: Generators.ceoGenerator, options: {} },
                "Executives": { type: "group", enableType: true, searchPlaceholder: "Type executive...", customGenerator: Generators.executiveGenerator, options: {} },
                "Business Innovators": { type: "group", enableType: true, searchPlaceholder: "Type innovator...", customGenerator: Generators.innovatorGenerator, options: {} },
                "Industry Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: Generators.industryLeaderGenerator, options: {} },
                "Motivational Business Speakers": { type: "group", enableType: true, searchPlaceholder: "Type speaker...", customGenerator: Generators.businessSpeakerGenerator, options: {} }
            }
        },
        "Public Speakers & Authors": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.speakerAuthorGenerator,
            options: {
                "Motivational Speakers": { type: "group", enableType: true, searchPlaceholder: "Type speaker...", customGenerator: Generators.motivationalSpeakerGenerator, options: {} },
                "Thought Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: Generators.thoughtLeaderGenerator, options: {} },
                "Authors": { type: "group", enableType: true, searchPlaceholder: "Type author...", customGenerator: Generators.authorGenerator, options: {} },
                "Book Writers": { type: "group", enableType: true, searchPlaceholder: "Type writer...", customGenerator: Generators.bookWriterGenerator, options: {} },
                "Professors": { type: "group", enableType: true, searchPlaceholder: "Type professor...", customGenerator: Generators.professorGenerator, options: {} },
                "Educators": { type: "group", enableType: true, searchPlaceholder: "Type educator...", customGenerator: Generators.educatorGenerator, options: {} }
            }
        },
        "TV Personalities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.tvPersonalityGenerator,
            options: {
                "TV Show Hosts": { type: "group", enableType: true, searchPlaceholder: "Type host...", customGenerator: Generators.hostGenerator, options: {} },
                "Anchors": { type: "group", enableType: true, searchPlaceholder: "Type anchor...", customGenerator: Generators.anchorGenerator, options: {} },
                "Reality Show Stars": { type: "group", enableType: true, searchPlaceholder: "Type star...", customGenerator: Generators.realityStarGenerator, options: {} },
                "Judges": { type: "group", enableType: true, searchPlaceholder: "Type judge...", customGenerator: Generators.judgeGenerator, options: {} },
                "News Anchors": { type: "group", enableType: true, searchPlaceholder: "Type anchor...", customGenerator: Generators.newsAnchorGenerator, options: {} },
                "TV Journalists": { type: "group", enableType: true, searchPlaceholder: "Type journalist...", customGenerator: Generators.journalistGenerator, options: {} }
            }
        },
        "Digital Celebrities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.digitalCelebGenerator,
            options: {
                "Social Media Personalities": { type: "group", enableType: true, searchPlaceholder: "Type personality...", customGenerator: Generators.socialPersonalityGenerator, options: {} },
                "Internet Celebrities": { type: "group", enableType: true, searchPlaceholder: "Type celebrity...", customGenerator: Generators.internetCelebGenerator, options: {} },
                "Meme Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: Generators.memeCreatorGenerator, options: {} },
                "Trend Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: Generators.trendCreatorGenerator, options: {} }
            }
        },
        "Global Icons": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: Generators.globalIconGenerator,
            options: {
                "Cultural Icons": { type: "group", enableType: true, searchPlaceholder: "Type icon...", customGenerator: Generators.culturalIconGenerator, options: {} },
                "International Celebrities": { type: "group", enableType: true, searchPlaceholder: "Type celebrity...", customGenerator: Generators.intlCelebGenerator, options: {} },
                "Multi-domain Personalities": { type: "group", enableType: true, searchPlaceholder: "Type personality...", customGenerator: Generators.multiDomainGenerator, options: {} }
            }
        }
    }
};

export const fanMomentOptions = {
    places: [
        "Red Carpet",
        "Movie Set",
        "Stage Event",
        "Casual Outdoor",
        "Indoor Studio"
    ],
    outfits: [
        "Casual",
        "Formal",
        "Event Look",
        "Traditional",
        "Movie-style Inspired"
    ],
    moods: [
        "Casual Meet",
        "Friendly Chat",
        "Photo Pose",
        "Celebration",
        "Interview Moment"
    ],
    framing: [
        "Medium Shot", // Default
        "Close Selfie",
        "Full Body"
    ]
};
