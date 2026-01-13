// Category Data for Fan Moment
import * as Generators from '../generators/fan-moment.js';

export const fanMomentCategory = {
    type: 'group',
    options: {
        "Film Stars": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type film star...",
            customGenerator: Generators.filmStarGenerator,
            options: {
                "Actors": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type actor name...",
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
                    searchPlaceholder: "Type actress name...",
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
                    searchPlaceholder: "Type director name...",
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
                    searchPlaceholder: "Type producer name...",
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
                "Screenwriters": {
                    type: "group",
                    options: {
                        "Enter Screenwriter": {
                            type: "input",
                            placeholder: "Type screenwriter...",
                            generator: Generators.screenwriterGenerator
                        }
                    }
                },
                "Music Composers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type composer name...",
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
                    searchPlaceholder: "Type singer name...",
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
                    searchPlaceholder: "Type choreographer name...",
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
                    searchPlaceholder: "Type cinematographer name...",
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
                    searchPlaceholder: "Type editor name...",
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
            searchPlaceholder: "Type sports star...",
            customGenerator: Generators.sportsStarGenerator,
            options: {
                "Top Sports": {
                    type: "group",
                    options: {
                         "Cricket": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type cricket player...",
                             customGenerator: Generators.cricketGenerator,
                             options: {
                                 "Sachin Tendulkar": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Sachin Tendulkar") },
                                 "Virat Kohli": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Virat Kohli") },
                                 "MS Dhoni": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "MS Dhoni") },
                                 "Ricky Ponting": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Ricky Ponting") },
                                 "Brian Lara": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Brian Lara") },
                                 "Jacques Kallis": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Jacques Kallis") },
                                 "Joe Root": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Joe Root") },
                                 "Kane Williamson": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Kane Williamson") },
                                 "Babar Azam": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Babar Azam") },
                                 "Chris Gayle": { type: "static", prompt: Generators.getSportsPrompt("Cricket Player", "Chris Gayle") }
                             }
                         },
                         "Football": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type football player...",
                             customGenerator: Generators.footballGenerator,
                             options: {
                                 "Lionel Messi": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Lionel Messi") },
                                 "Cristiano Ronaldo": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Cristiano Ronaldo") },
                                 "Neymar Jr.": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Neymar Jr.") },
                                 "Kylian Mbappé": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Kylian Mbappé") },
                                 "Ronaldinho": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Ronaldinho") },
                                 "Zinedine Zidane": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Zinedine Zidane") },
                                 "David Beckham": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "David Beckham") },
                                 "Mohamed Salah": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Mohamed Salah") },
                                 "Kevin De Bruyne": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Kevin De Bruyne") },
                                 "Robert Lewandowski": { type: "static", prompt: Generators.getSportsPrompt("Football Player", "Robert Lewandowski") }
                             }
                         },
                         "Basketball": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type basketball player...",
                             customGenerator: Generators.basketballGenerator,
                             options: {
                                 "Michael Jordan": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Michael Jordan") },
                                 "LeBron James": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "LeBron James") },
                                 "Kobe Bryant": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Kobe Bryant") },
                                 "Stephen Curry": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Stephen Curry") },
                                 "Shaquille O'Neal": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Shaquille O'Neal") },
                                 "Kevin Durant": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Kevin Durant") },
                                 "Magic Johnson": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Magic Johnson") },
                                 "Larry Bird": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Larry Bird") },
                                 "Giannis Antetokounmpo": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Giannis Antetokounmpo") },
                                 "Tim Duncan": { type: "static", prompt: Generators.getSportsPrompt("Basketball Player", "Tim Duncan") }
                             }
                         },
                         "Tennis": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type tennis player...",
                             customGenerator: Generators.tennisGenerator,
                             options: {
                                 "Roger Federer": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Roger Federer") },
                                 "Rafael Nadal": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Rafael Nadal") },
                                 "Novak Djokovic": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Novak Djokovic") },
                                 "Serena Williams": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Serena Williams") },
                                 "Steffi Graf": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Steffi Graf") },
                                 "Pete Sampras": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Pete Sampras") },
                                 "Andre Agassi": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Andre Agassi") },
                                 "Andy Murray": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Andy Murray") },
                                 "Carlos Alcaraz": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Carlos Alcaraz") },
                                 "Björn Borg": { type: "static", prompt: Generators.getSportsPrompt("Tennis Player", "Björn Borg") }
                             }
                         },
                         "Athletics": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type athlete...",
                             customGenerator: Generators.athleticsGenerator,
                             options: {
                                 "Usain Bolt": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Usain Bolt") },
                                 "Carl Lewis": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Carl Lewis") },
                                 "Michael Johnson": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Michael Johnson") },
                                 "Mo Farah": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Mo Farah") },
                                 "Eliud Kipchoge": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Eliud Kipchoge") },
                                 "Florence Griffith-Joyner": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Florence Griffith-Joyner") },
                                 "Allyson Felix": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Allyson Felix") },
                                 "Haile Gebrselassie": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Haile Gebrselassie") },
                                 "Yohan Blake": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Yohan Blake") },
                                 "Jesse Owens": { type: "static", prompt: Generators.getSportsPrompt("Athlete", "Jesse Owens") }
                             }
                         }
                    }
                },
                "Other Sports Players": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type sports player...",
                    customGenerator: Generators.otherSportsGenerator,
                    options: {
                        "Conor McGregor (MMA)": { type: "static", prompt: Generators.getSportsPrompt("Sports Personality", "Conor McGregor (MMA)") },
                        "Mike Tyson (Boxing)": { type: "static", prompt: Generators.getSportsPrompt("Sports Personality", "Mike Tyson (Boxing)") },
                        "Lewis Hamilton (Formula 1)": { type: "static", prompt: Generators.getSportsPrompt("Sports Personality", "Lewis Hamilton (Formula 1)") },
                        "Tiger Woods (Golf)": { type: "static", prompt: Generators.getSportsPrompt("Sports Personality", "Tiger Woods (Golf)") },
                        "Michael Schumacher (Formula 1)": { type: "static", prompt: Generators.getSportsPrompt("Sports Personality", "Michael Schumacher (Formula 1)") }
                    }
                },
                "Sports Legends": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type legend...",
                    customGenerator: Generators.sportsLegendGenerator,
                    options: {
                        "Pelé": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Pelé") },
                        "Diego Maradona": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Diego Maradona") },
                        "Sachin Tendulkar": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Sachin Tendulkar") },
                        "Muhammad Ali": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Muhammad Ali") },
                        "Michael Jordan": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Michael Jordan") },
                        "Usain Bolt": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Usain Bolt") },
                        "Roger Federer": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Roger Federer") },
                        "Rafael Nadal": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Rafael Nadal") },
                        "Novak Djokovic": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Novak Djokovic") },
                        "Wayne Gretzky": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Wayne Gretzky") },
                        "Michael Schumacher": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Michael Schumacher") },
                        "Tiger Woods": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Tiger Woods") },
                        "Jesse Owens": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Jesse Owens") },
                        "Carl Lewis": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Carl Lewis") },
                        "Haile Gebrselassie": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Haile Gebrselassie") },
                        "Jackie Robinson": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Jackie Robinson") },
                        "Serena Williams": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Serena Williams") },
                        "Magic Johnson": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Magic Johnson") },
                        "Ayrton Senna": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Ayrton Senna") },
                        "Don Bradman": { type: "static", prompt: Generators.getSportsPrompt("Sports Legend", "Don Bradman") }
                    }
                }
            }
        },
        "Singers & Musicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type musician...",
            customGenerator: Generators.musicianGenerator,
            options: {
                "Singers": {
                    type: "group",
                    options: {
                        "Enter Singer": {
                            type: "input",
                            placeholder: "Type singer...",
                            generator: Generators.singerGenerator
                        }
                    }
                },
                "Rappers": {
                    type: "group",
                    options: {
                        "Enter Rapper": {
                            type: "input",
                            placeholder: "Type rapper...",
                            generator: Generators.rapperGenerator
                        }
                    }
                },
                "Vocalists": {
                    type: "group",
                    options: {
                        "Enter Vocalist": {
                            type: "input",
                            placeholder: "Type vocalist...",
                            generator: Generators.vocalistGenerator
                        }
                    }
                },
                "Music Composers": {
                    type: "group",
                    options: {
                        "Enter Composer": {
                            type: "input",
                            placeholder: "Type composer...",
                            generator: Generators.composerGenerator
                        }
                    }
                },
                "Lyricists": {
                    type: "group",
                    options: {
                        "Enter Lyricist": {
                            type: "input",
                            placeholder: "Type lyricist...",
                            generator: Generators.lyricistGenerator
                        }
                    }
                },
                "Music Producers": {
                    type: "group",
                    options: {
                        "Enter Producer": {
                            type: "input",
                            placeholder: "Type producer...",
                            generator: Generators.musicProducerGenerator
                        }
                    }
                },
                "Instrumental Artists": {
                    type: "group",
                    options: {
                        "Enter Artist": {
                            type: "input",
                            placeholder: "Type artist...",
                            generator: Generators.instrumentalArtistGenerator
                        }
                    }
                },
                "Band Members": {
                    type: "group",
                    options: {
                        "Enter Member": {
                            type: "input",
                            placeholder: "Type member...",
                            generator: Generators.bandMemberGenerator
                        }
                    }
                },
                "DJs": {
                    type: "group",
                    options: {
                        "Enter DJ": {
                            type: "input",
                            placeholder: "Type DJ...",
                            generator: Generators.djGenerator
                        }
                    }
                },
                "Live Performers": {
                    type: "group",
                    options: {
                        "Enter Performer": {
                            type: "input",
                            placeholder: "Type performer...",
                            generator: Generators.performerGenerator
                        }
                    }
                }
            }
        },
        "Politicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type politician...",
            customGenerator: Generators.politicianGenerator,
            options: {
                "Presidents": {
                    type: "group",
                    options: {
                        "Enter President": {
                            type: "input",
                            placeholder: "Type president...",
                            generator: Generators.presidentGenerator
                        }
                    }
                },
                "Prime Ministers": {
                    type: "group",
                    options: {
                        "Enter PM": {
                            type: "input",
                            placeholder: "Type PM...",
                            generator: Generators.pmGenerator
                        }
                    }
                },
                "Chief Ministers": {
                    type: "group",
                    options: {
                        "Enter CM": {
                            type: "input",
                            placeholder: "Type CM...",
                            generator: Generators.cmGenerator
                        }
                    }
                },
                "Ministers": {
                    type: "group",
                    options: {
                        "Enter Minister": {
                            type: "input",
                            placeholder: "Type minister...",
                            generator: Generators.ministerGenerator
                        }
                    }
                },
                "Parliament Members": {
                    type: "group",
                    options: {
                        "Enter Member": {
                            type: "input",
                            placeholder: "Type member...",
                            generator: Generators.parliamentMemberGenerator
                        }
                    }
                },
                "Party Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generator: Generators.partyLeaderGenerator
                        }
                    }
                },
                "Political Speakers": {
                    type: "group",
                    options: {
                        "Enter Speaker": {
                            type: "input",
                            placeholder: "Type speaker...",
                            generator: Generators.politicalSpeakerGenerator
                        }
                    }
                },
                "Social Reform Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generator: Generators.socialReformLeaderGenerator
                        }
                    }
                }
            }
        },
        "Content Creators": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type creator...",
            customGenerator: Generators.contentCreatorGenerator,
            options: {
                "YouTubers": {
                    type: "group",
                    options: {
                        "Enter YouTuber": {
                            type: "input",
                            placeholder: "Type YouTuber...",
                            generator: Generators.youtuberGenerator
                        }
                    }
                },
                "Vloggers": {
                    type: "group",
                    options: {
                        "Enter Vlogger": {
                            type: "input",
                            placeholder: "Type vlogger...",
                            generator: Generators.vloggerGenerator
                        }
                    }
                },
                "Live Streamers": {
                    type: "group",
                    options: {
                        "Enter Streamer": {
                            type: "input",
                            placeholder: "Type streamer...",
                            generator: Generators.streamerGenerator
                        }
                    }
                },
                "Gamers": {
                    type: "group",
                    options: {
                        "Enter Gamer": {
                            type: "input",
                            placeholder: "Type gamer...",
                            generator: Generators.gamerGenerator
                        }
                    }
                },
                "Influencers": {
                    type: "group",
                    options: {
                        "Enter Influencer": {
                            type: "input",
                            placeholder: "Type influencer...",
                            generator: Generators.influencerGenerator
                        }
                    }
                },
                "Short-form Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generator: Generators.shortFormCreatorGenerator
                        }
                    }
                },
                "Educators": {
                    type: "group",
                    options: {
                        "Enter Educator": {
                            type: "input",
                            placeholder: "Type educator...",
                            generator: Generators.educatorGenerator
                        }
                    }
                },
                "Tech Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generator: Generators.techCreatorGenerator
                        }
                    }
                }
            }
        },
        "Business Leaders": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type business leader...",
            customGenerator: Generators.businessLeaderGenerator,
            options: {
                "Entrepreneurs": {
                    type: "group",
                    options: {
                        "Enter Entrepreneur": {
                            type: "input",
                            placeholder: "Type entrepreneur...",
                            generator: Generators.entrepreneurGenerator
                        }
                    }
                },
                "Startup Founders": {
                    type: "group",
                    options: {
                        "Enter Founder": {
                            type: "input",
                            placeholder: "Type founder...",
                            generator: Generators.founderGenerator
                        }
                    }
                },
                "CEOs": {
                    type: "group",
                    options: {
                        "Enter CEO": {
                            type: "input",
                            placeholder: "Type CEO...",
                            generator: Generators.ceoGenerator
                        }
                    }
                },
                "Executives": {
                    type: "group",
                    options: {
                        "Enter Executive": {
                            type: "input",
                            placeholder: "Type executive...",
                            generator: Generators.executiveGenerator
                        }
                    }
                },
                "Business Innovators": {
                    type: "group",
                    options: {
                        "Enter Innovator": {
                            type: "input",
                            placeholder: "Type innovator...",
                            generator: Generators.innovatorGenerator
                        }
                    }
                },
                "Industry Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generator: Generators.industryLeaderGenerator
                        }
                    }
                },
                "Motivational Business Speakers": {
                    type: "group",
                    options: {
                        "Enter Speaker": {
                            type: "input",
                            placeholder: "Type speaker...",
                            generator: Generators.businessSpeakerGenerator
                        }
                    }
                }
            }
        },
        "Public Speakers & Authors": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type speaker/author...",
            customGenerator: Generators.speakerAuthorGenerator,
            options: {
                "Motivational Speakers": {
                    type: "group",
                    options: {
                        "Enter Speaker": {
                            type: "input",
                            placeholder: "Type speaker...",
                            generator: Generators.motivationalSpeakerGenerator
                        }
                    }
                },
                "Thought Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generator: Generators.thoughtLeaderGenerator
                        }
                    }
                },
                "Authors": {
                    type: "group",
                    options: {
                        "Enter Author": {
                            type: "input",
                            placeholder: "Type author...",
                            generator: Generators.authorGenerator
                        }
                    }
                },
                "Book Writers": {
                    type: "group",
                    options: {
                        "Enter Writer": {
                            type: "input",
                            placeholder: "Type writer...",
                            generator: Generators.bookWriterGenerator
                        }
                    }
                },
                "Professors": {
                    type: "group",
                    options: {
                        "Enter Professor": {
                            type: "input",
                            placeholder: "Type professor...",
                            generator: Generators.professorGenerator
                        }
                    }
                },
                "Educators": {
                    type: "group",
                    options: {
                        "Enter Educator": {
                            type: "input",
                            placeholder: "Type educator...",
                            generator: Generators.educatorGenerator
                        }
                    }
                }
            }
        },
        "TV Personalities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type TV personality...",
            customGenerator: Generators.tvPersonalityGenerator,
            options: {
                "TV Show Hosts": {
                    type: "group",
                    options: {
                        "Enter Host": {
                            type: "input",
                            placeholder: "Type host...",
                            generator: Generators.hostGenerator
                        }
                    }
                },
                "Anchors": {
                    type: "group",
                    options: {
                        "Enter Anchor": {
                            type: "input",
                            placeholder: "Type anchor...",
                            generator: Generators.anchorGenerator
                        }
                    }
                },
                "Reality Show Stars": {
                    type: "group",
                    options: {
                        "Enter Star": {
                            type: "input",
                            placeholder: "Type star...",
                            generator: Generators.realityStarGenerator
                        }
                    }
                },
                "Judges": {
                    type: "group",
                    options: {
                        "Enter Judge": {
                            type: "input",
                            placeholder: "Type judge...",
                            generator: Generators.judgeGenerator
                        }
                    }
                },
                "News Anchors": {
                    type: "group",
                    options: {
                        "Enter Anchor": {
                            type: "input",
                            placeholder: "Type anchor...",
                            generator: Generators.newsAnchorGenerator
                        }
                    }
                },
                "TV Journalists": {
                    type: "group",
                    options: {
                        "Enter Journalist": {
                            type: "input",
                            placeholder: "Type journalist...",
                            generator: Generators.journalistGenerator
                        }
                    }
                }
            }
        },
        "Digital Celebrities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type digital celebrity...",
            customGenerator: Generators.digitalCelebGenerator,
            options: {
                "Social Media Personalities": {
                    type: "group",
                    options: {
                        "Enter Personality": {
                            type: "input",
                            placeholder: "Type personality...",
                            generator: Generators.socialPersonalityGenerator
                        }
                    }
                },
                "Internet Celebrities": {
                    type: "group",
                    options: {
                        "Enter Celebrity": {
                            type: "input",
                            placeholder: "Type celebrity...",
                            generator: Generators.internetCelebGenerator
                        }
                    }
                },
                "Meme Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generator: Generators.memeCreatorGenerator
                        }
                    }
                },
                "Trend Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generator: Generators.trendCreatorGenerator
                        }
                    }
                }
            }
        },
        "Global Icons": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type global icon...",
            customGenerator: Generators.globalIconGenerator,
            options: {
                "Cultural Icons": {
                    type: "group",
                    options: {
                        "Enter Icon": {
                            type: "input",
                            placeholder: "Type icon...",
                            generator: Generators.culturalIconGenerator
                        }
                    }
                },
                "International Celebrities": {
                    type: "group",
                    options: {
                        "Enter Celebrity": {
                            type: "input",
                            placeholder: "Type celebrity...",
                            generator: Generators.intlCelebGenerator
                        }
                    }
                },
                "Multi-domain Personalities": {
                    type: "group",
                    options: {
                        "Enter Personality": {
                            type: "input",
                            placeholder: "Type personality...",
                            generator: Generators.multiDomainGenerator
                        }
                    }
                }
            }
        }
    }
};

export const fanMomentOptions = {
    places: [
        "Stadium / Arena",
        "Practice Ground",
        "Award Ceremony",
        "Casual Outdoor",
        "Indoor Studio",
        "Red Carpet",
        "Movie Set",
        "Stage Event"
    ],
    outfits: [
        "Casual",
        "Sports Jersey",
        "Event Look",
        "Formal",
        "Traditional",
        "Movie-style Inspired"
    ],
    moods: [
        "Standing Together",
        "Side-by-Side",
        "Action Inspired (light, non-contact)",
        "Photo Pose",
        "Casual Meet",
        "Friendly Chat",
        "Celebration",
        "Interview Moment"
    ],
    framing: [
        "Close Shot",
        "Medium Shot",
        "Full Body",
        "Close Selfie"
    ]
};
