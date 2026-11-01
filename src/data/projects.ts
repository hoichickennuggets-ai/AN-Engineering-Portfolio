import type { Project } from '../types/project'

export const projectLibrary = {
  eyebrow: 'Project library',
  title: 'Engineering work with context.',
  intro: 'Each project summarizes its objective, key decisions, process, and supporting evidence.',
}

// EDIT PROJECT TEXT HERE. Chapter mediaFolder paths connect to drop-in image folders.
// mediaOverrides use exact filenames. mediaSequenceOverrides apply by alphabetical folder position.
export const projects: Project[] = [
  {
    slug: "baja-sae-chassis",
    title: "Longhorn Baja SAE — Chassis Design & Fabrication",
    shortTitle: "Baja SAE Chassis",
    organization: "Longhorn Baja SAE",
    role: "Chassis Co-Lead & Founding Member",
    category: "Vehicle Design",
    subtitle: "Parametric roll-cage design, structural analysis and fabrication for an off-road vehicle.",
    summary: "Reduced roll-cage mass by approximately 31%, from about 96 lb to 65 lb, through structural analysis and design revisions.",
    tags: [
      "SolidWorks",
      "ANSYS FEA",
      "Vehicle Integration",
      "Fabrication"
    ],
    featured: true,
    heroImage: {
      src: "images/baja/chassis-isometric-cad.png",
      alt: "Isometric SolidWorks CAD view of the Longhorn Baja SAE chassis",
      caption: "Isometric chassis CAD showing frame geometry and subsystem packaging."
    },
    heroMediaFolder: "project-media/baja/hero",
    heroPreferredBasename: "me in the baja car lol",
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/baja/01-design",
        eyebrow: "01",
        title: "Initial Design",
        body: [
          "When we first started laying out the chassis, there was no previous Longhorn Baja car to build off of, so a lot of the early work came down to design intuition and comparing different ways to brace the frame.",
          "I explored a front-braced rear roll-hoop layout and a heavily cross-braced floor design. The main goal was getting good triangulation and load transfer without throwing extra tubes everywhere and making the chassis unnecessarily heavy."
        ],
        bodyAfterMedia: [
          "The first sketch looked at bringing the rear bracing forward while keeping the seat low in the chassis. I was also thinking about keeping the driver's weight as low as possible and leaving enough room around the seat and surrounding systems.",
          "The floor went through a similar process. Three of us submitted separate concepts. Mine used a lot of cross-bracing, another concept used very little, and my lead combined parts of both into a simpler design. We kept removing tubing as the chassis developed and eventually ended up with more of a ladder-style floor with two lateral support tubes."
        ],
        engineeringStories: [
          {
            title: "Floor design evolution",
            body: [
              "My first floor concept had a lot of triangulation because I was trying to get as much support as possible without really knowing yet how much of it we would actually need.",
              "Three of us submitted different floor concepts. One design used very little cross-bracing, mine used a lot, and my lead combined the useful parts of the concepts into something simpler.",
              "As the rest of the chassis developed, we kept removing tubing. The final floor ended up closer to a ladder-style layout with two lateral support tubes.",
              "For our car, that gave us a simpler load path for vertical loading while reducing weight and making the floor much easier to manufacture. The rest of the roll cage still gave the chassis its three-dimensional structure, so the floor did not need to be filled with diagonal members."
            ]
          },
          {
            title: "Tube selection",
            body: [
              "Weight was a major consideration from the beginning. For bending, moving material farther away from the neutral axis is more efficient than simply making the wall thicker.",
              "For the same bending strength, a larger-diameter tube can use a thinner wall and still have a higher section modulus. Using the rules minimum wall thickness of 0.062 in, a 1.25 in OD tube gave the strength we needed while keeping the amount of material low.",
              "For comparison, a 1.25 in OD × 0.062 in wall tube has a section modulus of about 0.0655 in³. A 1.00 in OD tube would need roughly a 0.120 in wall to reach the same section modulus.",
              "That works out to roughly:",
              "1.25 × 0.062 tube: 0.786 lb/ft",
              "1.00 × 0.120 tube: 1.13 lb/ft",
              "So the larger, thinner-wall tube uses about 30% less material for approximately the same bending strength.",
              "That became part of how we approached the rest of the frame: use larger OD tubing where the rules and loading made sense, then keep the wall as thin as the rules allowed instead of adding weight through thicker tubing."
            ]
          },
          {
            title: "Tube-selection math",
            body: [
              "I = π/64 (D⁴ - d⁴)\n\nS = I / (D/2)\n\nd = D - 2t",
              "D = 1.25 in\nt = 0.062 in",
              "I ≈ 0.0409 in⁴\nS ≈ 0.0655 in³",
              "Equivalent approximate 1.00 in OD wall:\nt ≈ 0.120 in",
              "1.25 × 0.062:\nA ≈ 0.231 in²\n\n1.00 × 0.120:\nA ≈ 0.332 in²"
            ]
          }
        ],
        mediaSequenceOverrides: [
          {
            caption: "Early roll hoop concept research",
            description: "Early front-braced rear roll-hoop concept looking at rear bracing, load transfer, seat position, and keeping the driver's weight low in the chassis.",
            alt: "Early roll hoop concept research",
            mediaFit: "contain"
          },
          {
            caption: "Early floor-bracing concept",
            description: "My first floor concept used much heavier cross-bracing. Three of us explored separate layouts before parts of the designs were combined and simplified into the ladder-style floor used later in the chassis.",
            alt: "Early floor-bracing concept",
            mediaFit: "contain"
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/baja/02-cad-analysis",
        eyebrow: "02",
        title: "CAD & Analysis",
        body: [
          "Once the basic layout was established, most of the chassis development happened in SolidWorks.",
          "The chassis was built parametrically so dimensions and tube locations could change without rebuilding the entire frame. As the design changed, I used ANSYS to check the major chassis load cases and see where tubing could realistically be removed or downsized.",
          "The main load cases included approximately 10,000 lbf frontal/rear loading, 1,400 lbf suspension loading, and engine-mount loading.",
          "That process helped reduce the chassis from roughly 96 lb to 65 lb."
        ],
        metrics: [
          {
            value: "~96 → ~65 lb",
            label: "Roll-cage mass"
          },
          {
            value: "~31%",
            label: "Mass reduction"
          },
          {
            value: "~1.3 / ~1.5",
            label: "Front / rear factor of safety"
          }
        ],
        mediaFit: "contain",
        images: [
          {
            src: "images/baja/chassis-isometric-cad.png",
            alt: "Isometric SolidWorks CAD view of the Longhorn Baja SAE chassis",
            caption: "Isometric chassis CAD showing frame geometry and subsystem packaging."
          },
          {
            src: "images/baja/chassis-side-view-cad.png",
            alt: "Side-view SolidWorks CAD profile of the Longhorn Baja SAE chassis",
            caption: "Side-view chassis CAD showing the frame and packaging envelope."
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/baja/03-integration",
        eyebrow: "03",
        title: "System Integration",
        body: [
          "The chassis was made around the other systems that had to fit into it.",
          "Suspension mounting points had to line up with the chassis structure, the seat had to fit at the correct angle, and the rear of the frame had to leave enough room for the engine and CVT while still letting us remove them later.",
          "Keeping the chassis parametric made this easier because changes could be checked against the surrounding systems before we started cutting tubing."
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/baja/04-fabrication",
        eyebrow: "04",
        title: "Fabrication",
        body: [
          "Fabrication had to be planned around the fact that we did not know if we would have a permanent shop.",
          "The jigs were made to be portable and easy to recreate on whatever welding table we had access to. CAD geometry was used to locate fixture points, while straight tubes were cut and notched in-house. More complicated bent tubes were ordered from VR3 Engineering.",
          "After the tubes were fitted and jigged, I used TIG welding to tack chassis members in place."
        ],
        engineeringStories: [
          {
            title: "Designing around the tube notcher",
            body: [
              "A lot of the CAD could technically be manufactured, but not with the notcher we actually had.",
              "The manual notcher could only rotate to roughly 40° and worked best when the cut stayed in one plane. Compound notches quickly became difficult to make accurately.",
              "As the chassis developed, tube joints were changed so more of the cuts stayed within a single cutting plane.",
              "Instead of figuring out manufacturing after CAD was finished, the capability of the notcher became one of the constraints we designed around."
            ]
          },
          {
            title: "Chassis Support Stands",
            body: [
              "I also designed a pair of A-frame stands for the chassis to sit on while we work on the car.",
              "The stands use the same 1.00 in OD × 0.035 in wall secondary tubing used on the chassis.",
              "Even though the chassis load should normally be split between two stands, I designed each individual stand around a 300 lb load by itself to give us extra margin.",
              "I modeled the stand in SolidWorks and ran a beam FEA before fabrication.",
              "The 300 lb case produced approximately 152 MPa maximum upper-bound axial/bending stress compared with the displayed 460 MPa yield strength, giving an approximate factor of safety of 3.0.",
              "Maximum displacement was approximately 1.1 mm.",
              "The original design passed the analysis, so I kept it. The stands are currently waiting to be fabricated once we have garage space."
            ]
          }
        ],
        mediaSequenceOverrides: [
          {
            caption: "SolidWorks beam FEA of one chassis support stand under a 300 lb load. Deformation is exaggerated approximately 68.9× for visualization.",
            alt: "SolidWorks beam FEA of one chassis support stand under a 300 lb load. Deformation is exaggerated approximately 68.9× for visualization.",
            mediaFit: "contain"
          },
          {
            caption: "The same 300 lb stand study shown at a 1:1 deformation scale.",
            alt: "The same 300 lb stand study shown at a 1:1 deformation scale.",
            mediaFit: "contain"
          }
        ]
      }
    ],
    overview: [
      "When we started the chassis, we did not have an older Longhorn Baja car to build from, so a lot of the early work came from trying different layouts and seeing what actually made sense for the rules, weight, packaging, and how we were going to manufacture it.",
      "The roll cage went through 12 major iterations before the design was finalized. The final chassis dropped from about 96 lb to 65 lb while still accounting for the suspension, powertrain, seat, service access, and the equipment we had available to fabricate it."
    ]
  },
  {
    slug: "react-mission",
    title: "REACT - Texas Spacecraft Laboratory",
    shortTitle: "REACT - Texas Spacecraft Laboratory",
    organization: "Texas Spacecraft Laboratory",
    role: "Internal Hardware Lead",
    category: "Aerospace",
    subtitle: "Mechanical hardware for CubeSat magnetic-interference research.",
    summary: "Lead a three-person hardware team developing CubeSat sensor mounts, fasteners and prototype test hardware for REACT research.",
    tags: [
      "SolidWorks",
      "CubeSat Hardware",
      "Magnetic Compatibility",
      "Prototyping"
    ],
    featured: true,
    heroImage: {
      src: "images/react/damping-leg-prototypes-test-board.jpg",
      alt: "Prototype liquid damping legs supporting the Texas Spacecraft Laboratory test board",
      caption: "Physical damping-leg prototypes supporting the experimental test board."
    },
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/react/01-experimental-hardware",
        eyebrow: "01",
        title: "Experimental Hardware",
        body: [
          "For REACT, I lead a small internal hardware team and work with the physics and electronics teams on the mechanical side of the experiment.",
          "A lot of the work is designing the parts that hold sensors, electronics, and test hardware in place without making the experiment harder to assemble or adding unnecessary magnetic interference."
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/react/02-magnetic-packaging",
        eyebrow: "02",
        title: "Magnetic Compatibility & Packaging",
        body: [
          "Because the experiment is looking at magnetic interference, we also have to think about what the mechanical hardware itself is made from.",
          "I have worked on 3D-printed sensor mounts and snap-fit fastening concepts so we can reduce unnecessary steel hardware around the sensitive parts of the setup while still keeping everything positioned correctly."
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/react/03-damping",
        eyebrow: "03",
        title: "Damping Development",
        body: [
          "The test board also needed a way to reduce vibration getting into the experiment.",
          "My first idea was basically a cup of viscous fluid with the table leg sitting inside it. It was simple, but the leg still had too much room to move around and could potentially tip, so I moved away from that design pretty quickly.",
          "The second version spread the load over a larger base and added a press-fit slot for the table leg. This constrained the leg while allowing vibration to be dissipated through the surrounding fluid.",
          "The third version added holes through the bottom of the damper so 3D-printed pins could snap into the wooden base plate and hold the damper in place.",
          "Those pins ended up being too brittle and kept breaking. For the fourth iteration, I changed the pins to a more tapered geometry to reduce local stress concentrations and distribute the load more evenly."
        ],
        mediaFit: "contain",
        images: [
          {
            src: "images/react/damping-leg-cad.png",
            alt: "External CAD model of the liquid damping support leg developed for Texas Spacecraft Laboratory testing",
            caption: "External CAD model of the viscous damping support leg."
          },
          {
            src: "images/react/damping-leg-cross-section.png",
            alt: "Cross-sectional CAD view of the viscous liquid damping leg designed for prototype test-board isolation",
            caption: "Cross section showing the internal geometry for viscous fluid shear."
          },
          {
            src: "images/react/damping-leg-prototypes-test-board.jpg",
            alt: "Prototype liquid damping legs supporting the Texas Spacecraft Laboratory test board",
            caption: "Physical damping-leg prototypes supporting the experimental test board."
          }
        ]
      }
    ]
  },
  {
    slug: "engine-rebuild",
    title: "2-Stroke Engine Model Build",
    role: "Collaborative Model Assembly",
    category: "Engines",
    subtitle: "Commercial engine-kit assembly from crankshaft to completed model.",
    summary: "Assembled a commercial 2-stroke engine kit to study crankshaft motion, internal mechanisms and component relationships.",
    tags: [
      "Engines",
      "Mechanical Assembly",
      "Engine Architecture",
      "Teamwork"
    ],
    featured: true,
    heroImage: {
      src: "images/engine-rebuild/completed-model-engine.jpg",
      alt: "Completed assembled model internal combustion engine",
      caption: "Completed 2-stroke engine model with casing and external components installed."
    },
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/engine-model/01-mechanisms",
        eyebrow: "01",
        title: "Mechanism",
        body: [
          "I built the model with a group of friends mainly to get a better look at how the parts inside an engine actually interact.",
          "The first stage focused on the crankshaft and the parts connected to it before the rest of the casing went on."
        ],
        images: [
          {
            src: "images/engine-rebuild/crankshaft-assembly.jpg",
            alt: "Exposed crankshaft and connecting components during assembly of the model engine",
            caption: "Crankshaft and connecting components before final assembly."
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/engine-model/02-assembly",
        eyebrow: "02",
        title: "Internal Assembly",
        body: [
          "As more of the engine came together, we could see how the crankshaft, pistons, flywheel, and surrounding parts worked together instead of only looking at them individually."
        ],
        images: [
          {
            src: "images/engine-rebuild/internal-engine-assembly.jpg",
            alt: "Partially assembled model engine showing the internal crankshaft and reciprocating components",
            caption: "Internal crank mechanism before the remaining casing was installed."
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/engine-model/03-completed",
        eyebrow: "03",
        title: "Completed Model",
        body: [
          "We finished the model by installing the remaining casing and external components around the internal mechanism."
        ],
        images: [
          {
            src: "images/engine-rebuild/completed-model-engine.jpg",
            alt: "Completed assembled model internal combustion engine",
            caption: "Completed 2-stroke engine model with casing and external components installed."
          }
        ]
      }
    ]
  },
  {
    slug: "velocity-stack",
    title: "Engine Intake Velocity Stack",
    shortTitle: "Engine Intake Velocity Stack",
    role: "Independent Designer & Fabricator",
    category: "Engines",
    subtitle: "Helmholtz-tuned, 3D-printed intake for a Predator 79 cc engine.",
    summary: "Independently designed and 3D-printed an intake velocity stack that achieved a 7.2% average torque increase during testing.",
    tags: [
      "CAD",
      "Intake Tuning",
      "3D Printing",
      "Prototype Testing"
    ],
    featured: true,
    heroImage: {
      src: "images/velocity-stack/velocity-stack-installed.jpg",
      alt: "3D-printed intake velocity stack installed on a Predator 79 cc engine",
      caption: "Velocity-stack prototype installed on the Predator 79 cc engine for testing."
    },
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/velocity-stack/01-concept",
        eyebrow: "01",
        title: "Intake Concept",
        body: [
          "The goal for the intake project was a 5% improvement in engine output.",
          "I designed a 3D-printed velocity stack for a Predator 79 cc engine using a bellmouth to reduce inlet losses while also looking at inertial charging and intake pressure-wave behavior.",
          "Helmholtz-type resonance was used as part of the intake-length design instead of just making a funnel and hoping it helped."
        ],
        metrics: [
          {
            value: "5%",
            label: "Target improvement"
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/velocity-stack/02-cad",
        eyebrow: "02",
        title: "Prototype Development",
        body: [
          "The first prototype took about 18 hours to print and came out successfully, but the design was too large and the fit around the engine intake was too loose.",
          "We tried using a makeshift O-ring to help seal the interface, but the first version still had tolerance problems.",
          "For the second prototype, I shortened the design and tightened the interface around the intake."
        ],
        mediaFit: "contain",
        images: [
          {
            src: "images/velocity-stack/velocity-stack-cad.png",
            alt: "CAD model of the intake velocity stack designed for the Predator 79 cc engine",
            caption: "Intake CAD developed around engine-packaging and manufacturing constraints."
          }
        ],
        engineeringStories: [
          {
            title: "Tighter was not always better",
            body: [
              "The tighter second prototype fit the intake much better when the engine was cold.",
              "After running the engine during testing, I noticed that the intake heated up and expanded slightly. The stack was noticeably harder to remove after testing than it had been when we first installed it.",
              "It was a small real-world example of thermal expansion becoming important even when the dimensional change itself was tiny.",
              "If I made another version, I would intentionally leave a small amount of clearance and use a compliant O-ring or similar seal rather than relying on a very tight plastic-to-metal fit."
            ]
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/velocity-stack/03-testing",
        eyebrow: "03",
        title: "Testing & Result",
        body: [
          "The final prototype was mounted to the engine and tested using a Hall-effect sensor to measure RPM.",
          "Testing went up to approximately 2,000 RPM. Across the measured range, the engine produced an average torque increase of 7.2%, compared with our original 5% target."
        ],
        metrics: [
          {
            value: "5%",
            label: "Target improvement"
          },
          {
            value: "7.2%",
            label: "Average torque increase",
            note: "Across the tested RPM range"
          },
          {
            value: "~2,000 RPM",
            label: "Tested range"
          }
        ],
        images: [
          {
            src: "images/velocity-stack/velocity-stack-installed.jpg",
            alt: "3D-printed intake velocity stack installed on a Predator 79 cc engine",
            caption: "Velocity-stack prototype installed on the Predator 79 cc engine for testing."
          }
        ]
      }
    ]
  },
  {
    slug: "go-kart",
    title: "Go-Kart",
    role: "Personal Project",
    category: "Personal Projects",
    subtitle: "The go-kart is still in the early concept stage.",
    summary: "I currently have two retired H-E-B shopping carts that I plan to cut apart and use as the starting structure for the chassis.",
    tags: [
      "Chassis Concept",
      "CAD"
    ],
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/go-kart/01-concept",
        eyebrow: "01",
        title: "Concept",
        body: [
          "The go-kart is still in the early concept stage.",
          "I currently have two retired H-E-B shopping carts that I plan to cut apart and use as the starting structure for the chassis.",
          "The current plan is to bolt usable sections of the carts together instead of welding them. The cart geometry makes weld preparation difficult, and I do not yet have verified material information for the carts, so I am not making any claims about the exact alloy or weldability.",
          "Right now the main goal is getting a basic chassis layout established before moving further into the other systems."
        ]
      }
    ],
    status: "In Development"
  }
]

export const findProject = (slug: string) => projects.find((project) => project.slug === slug)
