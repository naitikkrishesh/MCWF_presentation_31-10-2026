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
      \dfrac{\Omega_{12}}{2} & -\dfrac{\Delta}{2} - i\dfrac{\gamma}{2}
      \end{bmatrix}`
    },
  {
      label: 'Forward Euler method',
      latex: String.raw`\ket{\psi{(t + dt)}} = \ket{\psi{(t)}} - i \Delta t H_{\mathrm{eff}} \ket{\psi{(t)}}`
    }],
    figures: [{ src: 'diagrams/background.png', label: 'Evolution of two level system using forward Euler method' }],
  },
  
  // s03: {
  //   title: 'Theoretical background',
  //   points: ['[Qubit and density matrix formalism]', '[Open-system dynamics]'],
  //   equations: [{ label: 'Lindblad master equation (verify notation)',
  //     latex: '\\dot{\\rho}=-\\tfrac{i}{\\hbar}[H,\\rho]+\\sum_k\\Big(L_k\\rho L_k^{\\dagger}-\\tfrac12\\{L_k^{\\dagger}L_k,\\rho\\}\\Big)' }],
  //   figures: [{ src: 'diagrams/background.svg', label: 'Insert Bloch Sphere / Circuit Diagram' }],
  // },
  s04: {
    title: 'Monte Carlo wave function method',
    points: ['[Core idea of MCWF]', '[Ensemble averaging recovers ρ]'],
    equations: [{ label: 'Effective Hamiltonian (verify notation)',
      latex: ['H_{\\mathrm{eff}}=H-\\tfrac{i\\hbar}{2}\\sum_k L_k^{\\dagger}L_k', 'd p_k=\\langle\\psi|L_k^{\\dagger}L_k|\\psi\\rangle\\,dt'] }],
    figures: [{ src: 'diagrams/mcwf-flowchart.svg', label: 'Insert MCWF Flowchart' }],
  },
  s05: {
    title: 'Mathematical model',
    points: ['[Operators and parameters]', '[Model assumptions]'],
    equations: [{ label: 'Hamiltonian', latex: eq('Insert Hamiltonian Equation') },
                { label: 'Collapse operators', latex: eq('Insert Collapse Operators') }],
    figures: [{ src: 'diagrams/model.svg', label: 'Insert Quantum Circuit Diagram' }],
  },
  s06: {
    title: 'Numerical implementation',
    points: ['[Simulation methodology]', '[Time step, trajectories, software]'],
    figures: [{ src: 'diagrams/implementation-flowchart.svg', label: 'Insert Implementation Flowchart' }],
  },
  s07: {
    title: 'Simulation results I',
    wide: true,
    points: ['[Key observation]', '[Important numerical result]'],
    figures: [{ src: 'plots/result-1a.png', label: 'Insert Simulation Plot' }, { src: 'plots/result-1b.png', label: 'Insert Simulation Plot' }],
  },
  s08: {
    title: 'Simulation results II',
    wide: true,
    points: ['[Comparison with analytical result]', '[Physical interpretation]'],
    figures: [{ src: 'plots/result-2a.png', label: 'Insert Comparison Plot' }, { src: 'plots/result-2b.png', label: 'Insert Simulation Plot' }],
  },
  s09: {
    title: 'Discussion and key findings',
    points: ['[Main scientific findings]', '[Interpretation]', '[Limitations]'],
    figures: [{ src: 'plots/summary.png', label: 'Insert Summary Figure' }],
  },
  s10: {
    conclusions: ['[Summary of the research]', '[Major conclusions]'],
    future: ['[Future direction 1]', '[Future direction 2]'],
  },
};
