/**
 * EDIT HERE. All text, equations and figure paths live in this file.
 * - Reorder slides: change `order`.
 * - Figure paths are relative to /public/assets/ (e.g. 'plots/rabi.png').
 *   If the file is missing, an elegant placeholder is shown instead.
 * - Equations are LaTeX strings. Use an array for step-by-step reveal.
 * - Content below is PLACEHOLDER. Equations on slides 3-4 are standard textbook
 *   definitions; verify and replace them with your own notation.
 */
export const meta = {
  title: 'MCWF Simulation for Single-Qubit Operation',
  shortTitle: 'MCWF · Single-Qubit Operation',
  student: 'Naitik Gupta',
  rollNumber: '252121032',
  degree: 'M.Sc. Physics',
  department: 'Department of Physics',
  institute: 'Indian Institute of Technology Guwahati',
  supervisor: 'Dr. Kanhaiya Pandey',
  date: '31/10/2026',
  logo: 'logos/iitg-logo.png',
};

export const order = ['s01','s02','s03','s04','s05','s06','s07','s08','s09','s10'];

const eq = (t) => `\\text{${t}}`;

export const slides = {
  s02: {
    title: 'Why single qubits, and why open systems',
    points: ['Problem:- Real qubits interact with their environment, causing decoherence(T2) and energy relaxation(T1) that affect quantum operations.', 'Why Single Qubit Operations Matter:- these are fundamental bulding block of Quantum circuit, making their control is essential for Quantum computation', 'Motivation for Open Quantum Systems:- Real quantum systems are not perfectly isolated. The Monte Carlo Wave Function (MCWF) method allows us to study noisy qubit dynamics through stochastic quantum trajectories.'],
    figures: [{ src: 'diagrams/wsq.png', label: 'Insert Why single qubits  Diagram' }],
  },
  s03: {
    title: 'Numerical Simulation of a Two Level Quantum System Using an Effective Hamiltonian',
    points: [, 'Evolution of two level system using forward Euler method'],
    equations: [{
      label: 'Effective Non Hermitian Hamiltonian',
      latex: String.raw`H_{\mathrm{eff}} =
      \begin{bmatrix}
      0 & \dfrac{\Omega_{12}}{2} \\
      \dfrac{\Omega_{12}}{2} & -\dfrac{\delta_\mathrm{12}}{2} - i\dfrac{\gamma}{2}
      \end{bmatrix}`
    },
  {
      label: 'Forward Euler method',
      latex: String.raw`\ket{\psi{(t + dt)}} = \ket{\psi{(t)}} - i \Delta t H_{\mathrm{eff}} \ket{\psi{(t)}}`
    },
  {
  label: '',
  latex: String.raw`
    \begin{aligned}
    \Omega_{12} &\rightarrow \text{Coupling strength} \\
    \gamma &\rightarrow \text{Decay rate} \\
    \delta_\mathrm{12} &\rightarrow \text{Detuning}
    \end{aligned}
  `
}],
    figures: [{ src: 'diagrams/background.png', label: 'Evolution of two level system using forward Euler method' }],
  },

  s03: {
    title: 'Numerical Simulation of a Two Level Quantum System Using an Effective Hamiltonian',
    points: [, 'Evolution of two level system using forward Euler method'],
    equations: [{
      label: 'Effective Non Hermitian Hamiltonian',
      latex: String.raw`H_{\mathrm{eff}} =
      \begin{bmatrix}
      0 & \dfrac{\Omega_{12}}{2} \\
      \dfrac{\Omega_{12}}{2} & -\dfrac{\delta_\mathrm{12}}{2} - i\dfrac{\gamma}{2}
      \end{bmatrix}`
    },
    {
        label: 'Forward Euler method',
        latex: String.raw`\ket{\psi{(t + dt)}} = \ket{\psi{(t)}} - i \Delta t H_{\mathrm{eff}} \ket{\psi{(t)}}`
      },
    {
    label: 'Parameters',
    latex: String.raw`
      \begin{aligned}
      \Omega_{12} &\rightarrow \text{Coupling strength} \\
      \gamma &\rightarrow \text{Decay rate} \\
      \delta_\mathrm{12} &\rightarrow \text{Detuning}
      \end{aligned}
    `
    }],
    figures: [{ src: 'diagrams/background.png', label: 'Evolution of two level system using forward Euler method' }],
  },


  
s04: {
    title: 'Numerical Simulation of a Two-Level Quantum System Using an Effective Hamiltonian',

    points: [
      'Time evolution of the excited state population',
      'Exponential decay in the absence of coherent driving'
    ],

    equations: [
      {
        label: 'Decay of Excited State Amplitude',
        latex: String.raw`
          C_e(t) = C_e(0)e^{-\gamma t/2}
        `
      },
      {
        label: 'Decay of Excited State Probability',
        latex: String.raw`
          P_e(t) = |C_e(0)|^2 e^{-\gamma t}
        `
      },
      {
        label: 'Parameters',
        latex: String.raw`
          \begin{aligned}
          C_e(0) &\rightarrow \text{Probabiliy amplitude at t=0}\\
          C_e(t) &\rightarrow \text{Probabiliy amplitude at time t}\\
          \gamma &\rightarrow \text{Decay rate} \\
          \end{aligned}
        `
      }
    ],

    figures: [
      {
        src: 'diagrams/decay_of_prob_ES.png',
        label: 'Evolution of the two-level system using the Forward Euler method'
      }
    ]
  },

  

  s05: {
    title: 'Quantum Jump and Collapse Operator',
    points: ['Quantum Jump is a sudden, stochastic (random) change in the quantum state of a system caused by its interaction with the environment'],
    equations: [{ label: 'Collapse Operator: Collapse operator represents a quantum jump caused by spontaneous emission',
                  latex: String.raw`
                  C = \sqrt{\gamma} \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}` },

                { label: 'Effective Hamiltonian: Effective hamiltonian describes what happens to the quantum state when we assume that no quantum jump has occured yet', 
                  latex: String.raw`
                  H_\mathrm{eff} = H - \dfrac{i}{2} C^{\dagger}\!C` }],
    figures: [{ src: 'diagrams/qjump4.png', label: 'Insert Quantum Jump Diagram' }],
  },
  s06: {
    title: 'Quantum Jump Dynamics in a Two Level System (Single MCWF Trajectory)',
    points: ['Coherent coupling drives population transfer between the ground and excited states.', 'Sudden discontinuities represent quantum jumps due to spontaneous emission.','After each jump, the system resets to the ground state and evolves again.','The random occurrence of jumps demonstrates the stochastic (random) nature of MCWF.'],
    figures: [{ src: 'diagrams/qjump1.png', label: 'Insert Quantum Jump Diagram' }],
  },
  s07: {
    title: 'Simulation results I : Stochastic Nature of MCWF Trajectories',
    wide: true,
    points: ['Different runs produce different population dynamics due to random quantum jumps.', 'Averaging over 10 trajectories produces noticeable statistical fluctuations.','Increasing the trajectory count reduces sampling noise.'],
    figures: [{ src: 'diagrams/popu_dynamics1.png', label: 'Insert Simulation Plot' }, { src: 'diagrams/popu_dynamics2.png', label: 'Insert Simulation Plot' }],
  },



  s08: {
    title: 'Simulation results II: Convergence of MCWF Trajectories',
    wide: false,
    split: '5fr 7fr',
    points: ['Increasing the number of trajectories from 10 to 10,000 significantly reduces statistical fluctuations.', 'The population curves become smoother as the ensemble size increases.','Both populations approach approximately steady values: P(g) ~ 0.67 and P(e) ~ 0.33.','The results demonstrate numerical convergence of the MCWF ensemble average.'],
    figures: [
      { src: 'diagrams/popu_dynamics4.png', label: 'Insert Comparison Plot' }, { src: 'diagrams/popu_dynamics3.png', label: 'Insert Simulation Plot' },
      { src: 'diagrams/popu_dynamics5.png', label: 'Insert Comparison Plot' }, { src: 'diagrams/popu_dynamics6.png', label: 'Insert Simulation Plot' },
      
    ],
  },
  s09: {
    title: 'Discussion and key findings',
    points: ['Quantum jumps: Random spontaneous emission events cause sudden changes in the quantum state.', 'Coherent dynamics: The driving Hamiltonian transfers population between the ground and excited states.', 'Ensemble convergence: Increasing the number of trajectories reduces statistical fluctuations and produces smoother population dynamics.','Steady state behavior: The populations approach approximately  P(g) ~ 0.67 and P(e) ~ 0.33','Limitation: The results demonstrate MCWF dynamics for a two-level system; explicit single-qubit gate operations and Lindblad validation remain to be established.'],
    figures: [],
  },
  s10: {

    conclusions: [
    'Implemented MCWF to study stochastic dynamics of a driven two-level quantum system.',
    'Observed quantum jumps and coherent population transfer between the two states.',
    'Increasing trajectories from 10 to 10,000 reduced statistical fluctuations, with P(g) ≈ 0.67 and P(e) ≈ 0.33.'
  ],

  future: [
    'Extend the simulation to single-qubit gates such as X, Y, Z, and Hadamard.',
    'Study gate fidelity under spontaneous emission and dephasing.',
    'Validate MCWF results against the Lindblad master equation.'
  ]
  //   conclusions: ['[Summary of the research]', '[Major conclusions]'],
  //   future: ['[Future direction 1]', '[Future direction 2]'],
  },
};
