// Category Data for Fan Moment
import * as Generators from '../generators/fan-moment.js';

export const fanMomentCategory = {
    type: 'group',
    options: {
        "Film Stars": {
            type: "group",
            options: {
                "Actors": {
                    type: "group",
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
                "Screenwriters": { type: "option", enableType: true, placeholder: "Type screenwriter...", customGenerator: Generators.screenwriterGenerator },
                "Music Composers": {
                    type: "group",
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
            options: {
                "Professional Athletes": { type: "option", enableType: true, placeholder: "Type athlete...", customGenerator: Generators.athleteGenerator },
                "Team Players": { type: "option", enableType: true, placeholder: "Type player...", customGenerator: Generators.teamPlayerGenerator },
                "Team Captains": { type: "option", enableType: true, placeholder: "Type captain...", customGenerator: Generators.teamCaptainGenerator },
                "Former Players / Legends": { type: "option", enableType: true, placeholder: "Type legend...", customGenerator: Generators.legendGenerator },
                "Coaches": { type: "option", enableType: true, placeholder: "Type coach...", customGenerator: Generators.coachGenerator },
                "Trainers": { type: "option", enableType: true, placeholder: "Type trainer...", customGenerator: Generators.trainerGenerator },
                "Sports Commentators": { type: "option", enableType: true, placeholder: "Type commentator...", customGenerator: Generators.commentatorGenerator },
                "Sports Analysts": { type: "option", enableType: true, placeholder: "Type analyst...", customGenerator: Generators.sportsAnalystGenerator }
            }
        },
        "Singers & Musicians": {
            type: "group",
            options: {
                "Singers": { type: "option", enableType: true, placeholder: "Type singer...", customGenerator: Generators.singerGenerator },
                "Rappers": { type: "option", enableType: true, placeholder: "Type rapper...", customGenerator: Generators.rapperGenerator },
                "Vocalists": { type: "option", enableType: true, placeholder: "Type vocalist...", customGenerator: Generators.vocalistGenerator },
                "Music Composers": { type: "option", enableType: true, placeholder: "Type composer...", customGenerator: Generators.composerGenerator },
                "Lyricists": { type: "option", enableType: true, placeholder: "Type lyricist...", customGenerator: Generators.lyricistGenerator },
                "Music Producers": { type: "option", enableType: true, placeholder: "Type producer...", customGenerator: Generators.musicProducerGenerator },
                "Instrumental Artists": { type: "option", enableType: true, placeholder: "Type artist...", customGenerator: Generators.instrumentalArtistGenerator },
                "Band Members": { type: "option", enableType: true, placeholder: "Type member...", customGenerator: Generators.bandMemberGenerator },
                "DJs": { type: "option", enableType: true, placeholder: "Type DJ...", customGenerator: Generators.djGenerator },
                "Live Performers": { type: "option", enableType: true, placeholder: "Type performer...", customGenerator: Generators.performerGenerator }
            }
        },
        "Politicians": {
            type: "group",
            options: {
                "Presidents": { type: "option", enableType: true, placeholder: "Type president...", customGenerator: Generators.presidentGenerator },
                "Prime Ministers": { type: "option", enableType: true, placeholder: "Type PM...", customGenerator: Generators.pmGenerator },
                "Chief Ministers": { type: "option", enableType: true, placeholder: "Type CM...", customGenerator: Generators.cmGenerator },
                "Ministers": { type: "option", enableType: true, placeholder: "Type minister...", customGenerator: Generators.ministerGenerator },
                "Parliament Members": { type: "option", enableType: true, placeholder: "Type member...", customGenerator: Generators.parliamentMemberGenerator },
                "Party Leaders": { type: "option", enableType: true, placeholder: "Type leader...", customGenerator: Generators.partyLeaderGenerator },
                "Political Speakers": { type: "option", enableType: true, placeholder: "Type speaker...", customGenerator: Generators.politicalSpeakerGenerator },
                "Social Reform Leaders": { type: "option", enableType: true, placeholder: "Type leader...", customGenerator: Generators.socialReformLeaderGenerator }
            }
        },
        "Content Creators": {
            type: "group",
            options: {
                "YouTubers": { type: "option", enableType: true, placeholder: "Type YouTuber...", customGenerator: Generators.youtuberGenerator },
                "Vloggers": { type: "option", enableType: true, placeholder: "Type vlogger...", customGenerator: Generators.vloggerGenerator },
                "Live Streamers": { type: "option", enableType: true, placeholder: "Type streamer...", customGenerator: Generators.streamerGenerator },
                "Gamers": { type: "option", enableType: true, placeholder: "Type gamer...", customGenerator: Generators.gamerGenerator },
                "Influencers": { type: "option", enableType: true, placeholder: "Type influencer...", customGenerator: Generators.influencerGenerator },
                "Short-form Creators": { type: "option", enableType: true, placeholder: "Type creator...", customGenerator: Generators.shortFormCreatorGenerator },
                "Educators": { type: "option", enableType: true, placeholder: "Type educator...", customGenerator: Generators.educatorGenerator },
                "Tech Creators": { type: "option", enableType: true, placeholder: "Type creator...", customGenerator: Generators.techCreatorGenerator }
            }
        },
        "Business Leaders": {
            type: "group",
            options: {
                "Entrepreneurs": { type: "option", enableType: true, placeholder: "Type entrepreneur...", customGenerator: Generators.entrepreneurGenerator },
                "Startup Founders": { type: "option", enableType: true, placeholder: "Type founder...", customGenerator: Generators.founderGenerator },
                "CEOs": { type: "option", enableType: true, placeholder: "Type CEO...", customGenerator: Generators.ceoGenerator },
                "Executives": { type: "option", enableType: true, placeholder: "Type executive...", customGenerator: Generators.executiveGenerator },
                "Business Innovators": { type: "option", enableType: true, placeholder: "Type innovator...", customGenerator: Generators.innovatorGenerator },
                "Industry Leaders": { type: "option", enableType: true, placeholder: "Type leader...", customGenerator: Generators.industryLeaderGenerator },
                "Motivational Business Speakers": { type: "option", enableType: true, placeholder: "Type speaker...", customGenerator: Generators.businessSpeakerGenerator }
            }
        },
        "Public Speakers & Authors": {
            type: "group",
            options: {
                "Motivational Speakers": { type: "option", enableType: true, placeholder: "Type speaker...", customGenerator: Generators.motivationalSpeakerGenerator },
                "Thought Leaders": { type: "option", enableType: true, placeholder: "Type leader...", customGenerator: Generators.thoughtLeaderGenerator },
                "Authors": { type: "option", enableType: true, placeholder: "Type author...", customGenerator: Generators.authorGenerator },
                "Book Writers": { type: "option", enableType: true, placeholder: "Type writer...", customGenerator: Generators.bookWriterGenerator },
                "Professors": { type: "option", enableType: true, placeholder: "Type professor...", customGenerator: Generators.professorGenerator },
                "Educators": { type: "option", enableType: true, placeholder: "Type educator...", customGenerator: Generators.educatorGenerator }
            }
        },
        "TV Personalities": {
            type: "group",
            options: {
                "TV Show Hosts": { type: "option", enableType: true, placeholder: "Type host...", customGenerator: Generators.hostGenerator },
                "Anchors": { type: "option", enableType: true, placeholder: "Type anchor...", customGenerator: Generators.anchorGenerator },
                "Reality Show Stars": { type: "option", enableType: true, placeholder: "Type star...", customGenerator: Generators.realityStarGenerator },
                "Judges": { type: "option", enableType: true, placeholder: "Type judge...", customGenerator: Generators.judgeGenerator },
                "News Anchors": { type: "option", enableType: true, placeholder: "Type anchor...", customGenerator: Generators.newsAnchorGenerator },
                "TV Journalists": { type: "option", enableType: true, placeholder: "Type journalist...", customGenerator: Generators.journalistGenerator }
            }
        },
        "Digital Celebrities": {
            type: "group",
            options: {
                "Social Media Personalities": { type: "option", enableType: true, placeholder: "Type personality...", customGenerator: Generators.socialPersonalityGenerator },
                "Internet Celebrities": { type: "option", enableType: true, placeholder: "Type celebrity...", customGenerator: Generators.internetCelebGenerator },
                "Meme Creators": { type: "option", enableType: true, placeholder: "Type creator...", customGenerator: Generators.memeCreatorGenerator },
                "Trend Creators": { type: "option", enableType: true, placeholder: "Type creator...", customGenerator: Generators.trendCreatorGenerator }
            }
        },
        "Global Icons": {
            type: "group",
            options: {
                "Cultural Icons": { type: "option", enableType: true, placeholder: "Type icon...", customGenerator: Generators.culturalIconGenerator },
                "International Celebrities": { type: "option", enableType: true, placeholder: "Type celebrity...", customGenerator: Generators.intlCelebGenerator },
                "Multi-domain Personalities": { type: "option", enableType: true, placeholder: "Type personality...", customGenerator: Generators.multiDomainGenerator }
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
