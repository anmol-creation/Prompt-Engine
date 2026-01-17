// Category Data for Fan Moment
// Pure Data: References to generators are via String IDs (resolved by Registry)

export const fanMomentCategory = {
    type: 'group',
    options: {
        "Film Stars": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type film star...",
            generatorID: "fan_filmStar",
            options: {
                "Actors": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type actor name...",
                    generatorID: "fan_actor",
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
                    generatorID: "fan_actress",
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
                    generatorID: "fan_director",
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
                    generatorID: "fan_producer",
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
                            generatorID: "fan_screenwriter"
                        }
                    }
                },
                "Music Composers": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type composer name...",
                    generatorID: "fan_musicComposer",
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
                    generatorID: "fan_playbackSinger",
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
                    generatorID: "fan_choreographer",
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
                    generatorID: "fan_cinematographer",
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
                    generatorID: "fan_editor",
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
            generatorID: "fan_sportsStar",
            options: {
                "Top Sports": {
                    type: "group",
                    options: {
                         "Cricket": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type cricket player...",
                             generatorID: "fan_cricket",
                             options: {
                                 "Sachin Tendulkar": { type: "static", prompt: "Fan Moment with Cricket Player: Sachin Tendulkar" },
                                 "Virat Kohli": { type: "static", prompt: "Fan Moment with Cricket Player: Virat Kohli" },
                                 "MS Dhoni": { type: "static", prompt: "Fan Moment with Cricket Player: MS Dhoni" },
                                 "Ricky Ponting": { type: "static", prompt: "Fan Moment with Cricket Player: Ricky Ponting" },
                                 "Brian Lara": { type: "static", prompt: "Fan Moment with Cricket Player: Brian Lara" },
                                 "Jacques Kallis": { type: "static", prompt: "Fan Moment with Cricket Player: Jacques Kallis" },
                                 "Joe Root": { type: "static", prompt: "Fan Moment with Cricket Player: Joe Root" },
                                 "Kane Williamson": { type: "static", prompt: "Fan Moment with Cricket Player: Kane Williamson" },
                                 "Babar Azam": { type: "static", prompt: "Fan Moment with Cricket Player: Babar Azam" },
                                 "Chris Gayle": { type: "static", prompt: "Fan Moment with Cricket Player: Chris Gayle" }
                             }
                         },
                         "Football": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type football player...",
                             generatorID: "fan_football",
                             options: {
                                 "Lionel Messi": { type: "static", prompt: "Fan Moment with Football Player: Lionel Messi" },
                                 "Cristiano Ronaldo": { type: "static", prompt: "Fan Moment with Football Player: Cristiano Ronaldo" },
                                 "Neymar Jr.": { type: "static", prompt: "Fan Moment with Football Player: Neymar Jr." },
                                 "Kylian Mbappé": { type: "static", prompt: "Fan Moment with Football Player: Kylian Mbappé" },
                                 "Ronaldinho": { type: "static", prompt: "Fan Moment with Football Player: Ronaldinho" },
                                 "Zinedine Zidane": { type: "static", prompt: "Fan Moment with Football Player: Zinedine Zidane" },
                                 "David Beckham": { type: "static", prompt: "Fan Moment with Football Player: David Beckham" },
                                 "Mohamed Salah": { type: "static", prompt: "Fan Moment with Football Player: Mohamed Salah" },
                                 "Kevin De Bruyne": { type: "static", prompt: "Fan Moment with Football Player: Kevin De Bruyne" },
                                 "Robert Lewandowski": { type: "static", prompt: "Fan Moment with Football Player: Robert Lewandowski" }
                             }
                         },
                         "Basketball": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type basketball player...",
                             generatorID: "fan_basketball",
                             options: {
                                 "Michael Jordan": { type: "static", prompt: "Fan Moment with Basketball Player: Michael Jordan" },
                                 "LeBron James": { type: "static", prompt: "Fan Moment with Basketball Player: LeBron James" },
                                 "Kobe Bryant": { type: "static", prompt: "Fan Moment with Basketball Player: Kobe Bryant" },
                                 "Stephen Curry": { type: "static", prompt: "Fan Moment with Basketball Player: Stephen Curry" },
                                 "Shaquille O'Neal": { type: "static", prompt: "Fan Moment with Basketball Player: Shaquille O'Neal" },
                                 "Kevin Durant": { type: "static", prompt: "Fan Moment with Basketball Player: Kevin Durant" },
                                 "Magic Johnson": { type: "static", prompt: "Fan Moment with Basketball Player: Magic Johnson" },
                                 "Larry Bird": { type: "static", prompt: "Fan Moment with Basketball Player: Larry Bird" },
                                 "Giannis Antetokounmpo": { type: "static", prompt: "Fan Moment with Basketball Player: Giannis Antetokounmpo" },
                                 "Tim Duncan": { type: "static", prompt: "Fan Moment with Basketball Player: Tim Duncan" }
                             }
                         },
                         "Tennis": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type tennis player...",
                             generatorID: "fan_tennis",
                             options: {
                                 "Roger Federer": { type: "static", prompt: "Fan Moment with Tennis Player: Roger Federer" },
                                 "Rafael Nadal": { type: "static", prompt: "Fan Moment with Tennis Player: Rafael Nadal" },
                                 "Novak Djokovic": { type: "static", prompt: "Fan Moment with Tennis Player: Novak Djokovic" },
                                 "Serena Williams": { type: "static", prompt: "Fan Moment with Tennis Player: Serena Williams" },
                                 "Steffi Graf": { type: "static", prompt: "Fan Moment with Tennis Player: Steffi Graf" },
                                 "Pete Sampras": { type: "static", prompt: "Fan Moment with Tennis Player: Pete Sampras" },
                                 "Andre Agassi": { type: "static", prompt: "Fan Moment with Tennis Player: Andre Agassi" },
                                 "Andy Murray": { type: "static", prompt: "Fan Moment with Tennis Player: Andy Murray" },
                                 "Carlos Alcaraz": { type: "static", prompt: "Fan Moment with Tennis Player: Carlos Alcaraz" },
                                 "Björn Borg": { type: "static", prompt: "Fan Moment with Tennis Player: Björn Borg" }
                             }
                         },
                         "Athletics": {
                             type: "group",
                             enableType: true,
                             searchPlaceholder: "Type athlete...",
                             generatorID: "fan_athletics",
                             options: {
                                 "Usain Bolt": { type: "static", prompt: "Fan Moment with Athlete: Usain Bolt" },
                                 "Carl Lewis": { type: "static", prompt: "Fan Moment with Athlete: Carl Lewis" },
                                 "Michael Johnson": { type: "static", prompt: "Fan Moment with Athlete: Michael Johnson" },
                                 "Mo Farah": { type: "static", prompt: "Fan Moment with Athlete: Mo Farah" },
                                 "Eliud Kipchoge": { type: "static", prompt: "Fan Moment with Athlete: Eliud Kipchoge" },
                                 "Florence Griffith-Joyner": { type: "static", prompt: "Fan Moment with Athlete: Florence Griffith-Joyner" },
                                 "Allyson Felix": { type: "static", prompt: "Fan Moment with Athlete: Allyson Felix" },
                                 "Haile Gebrselassie": { type: "static", prompt: "Fan Moment with Athlete: Haile Gebrselassie" },
                                 "Yohan Blake": { type: "static", prompt: "Fan Moment with Athlete: Yohan Blake" },
                                 "Jesse Owens": { type: "static", prompt: "Fan Moment with Athlete: Jesse Owens" }
                             }
                         }
                    }
                },
                "Other Sports Players": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type sports player...",
                    generatorID: "fan_otherSports",
                    options: {
                        "Conor McGregor (MMA)": { type: "static", prompt: "Fan Moment with Sports Personality: Conor McGregor (MMA)" },
                        "Mike Tyson (Boxing)": { type: "static", prompt: "Fan Moment with Sports Personality: Mike Tyson (Boxing)" },
                        "Lewis Hamilton (Formula 1)": { type: "static", prompt: "Fan Moment with Sports Personality: Lewis Hamilton (Formula 1)" },
                        "Tiger Woods (Golf)": { type: "static", prompt: "Fan Moment with Sports Personality: Tiger Woods (Golf)" },
                        "Michael Schumacher (Formula 1)": { type: "static", prompt: "Fan Moment with Sports Personality: Michael Schumacher (Formula 1)" }
                    }
                },
                "Sports Legends": {
                    type: "group",
                    enableType: true,
                    searchPlaceholder: "Type legend...",
                    generatorID: "fan_sportsLegend",
                    options: {
                        "Pelé": { type: "static", prompt: "Fan Moment with Sports Legend: Pelé" },
                        "Diego Maradona": { type: "static", prompt: "Fan Moment with Sports Legend: Diego Maradona" },
                        "Sachin Tendulkar": { type: "static", prompt: "Fan Moment with Sports Legend: Sachin Tendulkar" },
                        "Muhammad Ali": { type: "static", prompt: "Fan Moment with Sports Legend: Muhammad Ali" },
                        "Michael Jordan": { type: "static", prompt: "Fan Moment with Sports Legend: Michael Jordan" },
                        "Usain Bolt": { type: "static", prompt: "Fan Moment with Sports Legend: Usain Bolt" },
                        "Roger Federer": { type: "static", prompt: "Fan Moment with Sports Legend: Roger Federer" },
                        "Rafael Nadal": { type: "static", prompt: "Fan Moment with Sports Legend: Rafael Nadal" },
                        "Novak Djokovic": { type: "static", prompt: "Fan Moment with Sports Legend: Novak Djokovic" },
                        "Wayne Gretzky": { type: "static", prompt: "Fan Moment with Sports Legend: Wayne Gretzky" },
                        "Michael Schumacher": { type: "static", prompt: "Fan Moment with Sports Legend: Michael Schumacher" },
                        "Tiger Woods": { type: "static", prompt: "Fan Moment with Sports Legend: Tiger Woods" },
                        "Jesse Owens": { type: "static", prompt: "Fan Moment with Sports Legend: Jesse Owens" },
                        "Carl Lewis": { type: "static", prompt: "Fan Moment with Sports Legend: Carl Lewis" },
                        "Haile Gebrselassie": { type: "static", prompt: "Fan Moment with Sports Legend: Haile Gebrselassie" },
                        "Jackie Robinson": { type: "static", prompt: "Fan Moment with Sports Legend: Jackie Robinson" },
                        "Serena Williams": { type: "static", prompt: "Fan Moment with Sports Legend: Serena Williams" },
                        "Magic Johnson": { type: "static", prompt: "Fan Moment with Sports Legend: Magic Johnson" },
                        "Ayrton Senna": { type: "static", prompt: "Fan Moment with Sports Legend: Ayrton Senna" },
                        "Don Bradman": { type: "static", prompt: "Fan Moment with Sports Legend: Don Bradman" }
                    }
                }
            }
        },
        "Singers & Musicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type musician...",
            generatorID: "fan_musician",
            options: {
                "Singers": {
                    type: "group",
                    options: {
                        "Enter Singer": {
                            type: "input",
                            placeholder: "Type singer...",
                            generatorID: "fan_singer"
                        }
                    }
                },
                "Rappers": {
                    type: "group",
                    options: {
                        "Enter Rapper": {
                            type: "input",
                            placeholder: "Type rapper...",
                            generatorID: "fan_rapper"
                        }
                    }
                },
                "Vocalists": {
                    type: "group",
                    options: {
                        "Enter Vocalist": {
                            type: "input",
                            placeholder: "Type vocalist...",
                            generatorID: "fan_vocalist"
                        }
                    }
                },
                "Music Composers": {
                    type: "group",
                    options: {
                        "Enter Composer": {
                            type: "input",
                            placeholder: "Type composer...",
                            generatorID: "fan_composer"
                        }
                    }
                },
                "Lyricists": {
                    type: "group",
                    options: {
                        "Enter Lyricist": {
                            type: "input",
                            placeholder: "Type lyricist...",
                            generatorID: "fan_lyricist"
                        }
                    }
                },
                "Music Producers": {
                    type: "group",
                    options: {
                        "Enter Producer": {
                            type: "input",
                            placeholder: "Type producer...",
                            generatorID: "fan_musicProducer"
                        }
                    }
                },
                "Instrumental Artists": {
                    type: "group",
                    options: {
                        "Enter Artist": {
                            type: "input",
                            placeholder: "Type artist...",
                            generatorID: "fan_instrumentalArtist"
                        }
                    }
                },
                "Band Members": {
                    type: "group",
                    options: {
                        "Enter Member": {
                            type: "input",
                            placeholder: "Type member...",
                            generatorID: "fan_bandMember"
                        }
                    }
                },
                "DJs": {
                    type: "group",
                    options: {
                        "Enter DJ": {
                            type: "input",
                            placeholder: "Type DJ...",
                            generatorID: "fan_dj"
                        }
                    }
                },
                "Live Performers": {
                    type: "group",
                    options: {
                        "Enter Performer": {
                            type: "input",
                            placeholder: "Type performer...",
                            generatorID: "fan_performer"
                        }
                    }
                }
            }
        },
        "Politicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type politician...",
            generatorID: "fan_politician",
            options: {
                "Presidents": {
                    type: "group",
                    options: {
                        "Enter President": {
                            type: "input",
                            placeholder: "Type president...",
                            generatorID: "fan_president"
                        }
                    }
                },
                "Prime Ministers": {
                    type: "group",
                    options: {
                        "Enter PM": {
                            type: "input",
                            placeholder: "Type PM...",
                            generatorID: "fan_pm"
                        }
                    }
                },
                "Chief Ministers": {
                    type: "group",
                    options: {
                        "Enter CM": {
                            type: "input",
                            placeholder: "Type CM...",
                            generatorID: "fan_cm"
                        }
                    }
                },
                "Ministers": {
                    type: "group",
                    options: {
                        "Enter Minister": {
                            type: "input",
                            placeholder: "Type minister...",
                            generatorID: "fan_minister"
                        }
                    }
                },
                "Parliament Members": {
                    type: "group",
                    options: {
                        "Enter Member": {
                            type: "input",
                            placeholder: "Type member...",
                            generatorID: "fan_parliamentMember"
                        }
                    }
                },
                "Party Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generatorID: "fan_partyLeader"
                        }
                    }
                },
                "Political Speakers": {
                    type: "group",
                    options: {
                        "Enter Speaker": {
                            type: "input",
                            placeholder: "Type speaker...",
                            generatorID: "fan_politicalSpeaker"
                        }
                    }
                },
                "Social Reform Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generatorID: "fan_socialReformLeader"
                        }
                    }
                }
            }
        },
        "Content Creators": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type creator...",
            generatorID: "fan_contentCreator",
            options: {
                "YouTubers": {
                    type: "group",
                    options: {
                        "Enter YouTuber": {
                            type: "input",
                            placeholder: "Type YouTuber...",
                            generatorID: "fan_youtuber"
                        }
                    }
                },
                "Vloggers": {
                    type: "group",
                    options: {
                        "Enter Vlogger": {
                            type: "input",
                            placeholder: "Type vlogger...",
                            generatorID: "fan_vlogger"
                        }
                    }
                },
                "Live Streamers": {
                    type: "group",
                    options: {
                        "Enter Streamer": {
                            type: "input",
                            placeholder: "Type streamer...",
                            generatorID: "fan_streamer"
                        }
                    }
                },
                "Gamers": {
                    type: "group",
                    options: {
                        "Enter Gamer": {
                            type: "input",
                            placeholder: "Type gamer...",
                            generatorID: "fan_gamer"
                        }
                    }
                },
                "Influencers": {
                    type: "group",
                    options: {
                        "Enter Influencer": {
                            type: "input",
                            placeholder: "Type influencer...",
                            generatorID: "fan_influencer"
                        }
                    }
                },
                "Short-form Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generatorID: "fan_shortFormCreator"
                        }
                    }
                },
                "Educators": {
                    type: "group",
                    options: {
                        "Enter Educator": {
                            type: "input",
                            placeholder: "Type educator...",
                            generatorID: "fan_educator"
                        }
                    }
                },
                "Tech Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generatorID: "fan_techCreator"
                        }
                    }
                }
            }
        },
        "Business Leaders": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type business leader...",
            generatorID: "fan_businessLeader",
            options: {
                "Entrepreneurs": {
                    type: "group",
                    options: {
                        "Enter Entrepreneur": {
                            type: "input",
                            placeholder: "Type entrepreneur...",
                            generatorID: "fan_entrepreneur"
                        }
                    }
                },
                "Startup Founders": {
                    type: "group",
                    options: {
                        "Enter Founder": {
                            type: "input",
                            placeholder: "Type founder...",
                            generatorID: "fan_founder"
                        }
                    }
                },
                "CEOs": {
                    type: "group",
                    options: {
                        "Enter CEO": {
                            type: "input",
                            placeholder: "Type CEO...",
                            generatorID: "fan_ceo"
                        }
                    }
                },
                "Executives": {
                    type: "group",
                    options: {
                        "Enter Executive": {
                            type: "input",
                            placeholder: "Type executive...",
                            generatorID: "fan_executive"
                        }
                    }
                },
                "Business Innovators": {
                    type: "group",
                    options: {
                        "Enter Innovator": {
                            type: "input",
                            placeholder: "Type innovator...",
                            generatorID: "fan_innovator"
                        }
                    }
                },
                "Industry Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generatorID: "fan_industryLeader"
                        }
                    }
                },
                "Motivational Business Speakers": {
                    type: "group",
                    options: {
                        "Enter Speaker": {
                            type: "input",
                            placeholder: "Type speaker...",
                            generatorID: "fan_businessSpeaker"
                        }
                    }
                }
            }
        },
        "Public Speakers & Authors": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type speaker/author...",
            generatorID: "fan_speakerAuthor",
            options: {
                "Motivational Speakers": {
                    type: "group",
                    options: {
                        "Enter Speaker": {
                            type: "input",
                            placeholder: "Type speaker...",
                            generatorID: "fan_motivationalSpeaker"
                        }
                    }
                },
                "Thought Leaders": {
                    type: "group",
                    options: {
                        "Enter Leader": {
                            type: "input",
                            placeholder: "Type leader...",
                            generatorID: "fan_thoughtLeader"
                        }
                    }
                },
                "Authors": {
                    type: "group",
                    options: {
                        "Enter Author": {
                            type: "input",
                            placeholder: "Type author...",
                            generatorID: "fan_author"
                        }
                    }
                },
                "Book Writers": {
                    type: "group",
                    options: {
                        "Enter Writer": {
                            type: "input",
                            placeholder: "Type writer...",
                            generatorID: "fan_bookWriter"
                        }
                    }
                },
                "Professors": {
                    type: "group",
                    options: {
                        "Enter Professor": {
                            type: "input",
                            placeholder: "Type professor...",
                            generatorID: "fan_professor"
                        }
                    }
                },
                "Educators": {
                    type: "group",
                    options: {
                        "Enter Educator": {
                            type: "input",
                            placeholder: "Type educator...",
                            generatorID: "fan_educator"
                        }
                    }
                }
            }
        },
        "TV Personalities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type TV personality...",
            generatorID: "fan_tvPersonality",
            options: {
                "TV Show Hosts": {
                    type: "group",
                    options: {
                        "Enter Host": {
                            type: "input",
                            placeholder: "Type host...",
                            generatorID: "fan_host"
                        }
                    }
                },
                "Anchors": {
                    type: "group",
                    options: {
                        "Enter Anchor": {
                            type: "input",
                            placeholder: "Type anchor...",
                            generatorID: "fan_anchor"
                        }
                    }
                },
                "Reality Show Stars": {
                    type: "group",
                    options: {
                        "Enter Star": {
                            type: "input",
                            placeholder: "Type star...",
                            generatorID: "fan_realityStar"
                        }
                    }
                },
                "Judges": {
                    type: "group",
                    options: {
                        "Enter Judge": {
                            type: "input",
                            placeholder: "Type judge...",
                            generatorID: "fan_judge"
                        }
                    }
                },
                "News Anchors": {
                    type: "group",
                    options: {
                        "Enter Anchor": {
                            type: "input",
                            placeholder: "Type anchor...",
                            generatorID: "fan_newsAnchor"
                        }
                    }
                },
                "TV Journalists": {
                    type: "group",
                    options: {
                        "Enter Journalist": {
                            type: "input",
                            placeholder: "Type journalist...",
                            generatorID: "fan_journalist"
                        }
                    }
                }
            }
        },
        "Digital Celebrities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type digital celebrity...",
            generatorID: "fan_digitalCeleb",
            options: {
                "Social Media Personalities": {
                    type: "group",
                    options: {
                        "Enter Personality": {
                            type: "input",
                            placeholder: "Type personality...",
                            generatorID: "fan_socialPersonality"
                        }
                    }
                },
                "Internet Celebrities": {
                    type: "group",
                    options: {
                        "Enter Celebrity": {
                            type: "input",
                            placeholder: "Type celebrity...",
                            generatorID: "fan_internetCeleb"
                        }
                    }
                },
                "Meme Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generatorID: "fan_memeCreator"
                        }
                    }
                },
                "Trend Creators": {
                    type: "group",
                    options: {
                        "Enter Creator": {
                            type: "input",
                            placeholder: "Type creator...",
                            generatorID: "fan_trendCreator"
                        }
                    }
                }
            }
        },
        "Global Icons": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type global icon...",
            generatorID: "fan_globalIcon",
            options: {
                "Cultural Icons": {
                    type: "group",
                    options: {
                        "Enter Icon": {
                            type: "input",
                            placeholder: "Type icon...",
                            generatorID: "fan_culturalIcon"
                        }
                    }
                },
                "International Celebrities": {
                    type: "group",
                    options: {
                        "Enter Celebrity": {
                            type: "input",
                            placeholder: "Type celebrity...",
                            generatorID: "fan_intlCeleb"
                        }
                    }
                },
                "Multi-domain Personalities": {
                    type: "group",
                    options: {
                        "Enter Personality": {
                            type: "input",
                            placeholder: "Type personality...",
                            generatorID: "fan_multiDomain"
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
