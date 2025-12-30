import { Profile, Publication, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  // { id: 'cv', label: 'CV' },
];

export const PROFILE: Profile = {
  name: "Vladimer Khasia",
  title: "Machine Learning Researcher",
  institution: "Cohere Labs Community", 
  email: "vladimer.khasia.1@gmail.com",
  github: "https://github.com/VladimerKhasia",
  scholar: "https://scholar.google.com/citations?user=noTRcQoAAAAJ&hl=en",
  about: `My research focuses on investigating the foundations of artificial intelligence.`,
  avatarUrl: "https://github.com/VladimerKhasia.png", 
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "DSC",
    title: "Dynamic Subspace Composition: Efficient Adaptation via Contractive Basis Expansion", 
    authors: [
      { name: "Vladimer Khasia", isMe: true },
  
    ],
    venue: "arXiv",
    year: 2025,
    thumbnailUrl: "",
    abstract: "Mixture of Experts (MoE) models scale capacity but often suffer from representation collapse and gradient instability. We propose Dynamic Subspace Composition (DSC), a framework that approximates context-dependent weights via a state-dependent, sparse expansion of a shared basis bank. Formally, DSC models the weight update as a residual trajectory within a Star- Shaped Domain, employing a Magnitude-Gated Simplex Interpolation to ensure continuity at the identity. Unlike standard Mixture-of-LoRAs, which incurs O(M rd) parameter complexity by retrieving independent rank-r matrices, DSC constructs a compositional rank-K approximation from decoupled unit-norm basis vectors. This reduces parameter complexity to O(M d) and memory traffic to O(Kd), while Frame-Theoretic regularization and spectral constraints provide rigorous worst-case bounds on the dynamic update.",
    links: {
      // code: "",
      paper: "https://arxiv.org/abs/2512.23448",
      pdf: "https://arxiv.org/pdf/2512.23448"
    },
    tags: ["Dynamic Subspace Composition", "Mixture of Experts (MoE)", "Contractive Basis Expansion"]
  },  
  {
    id: "vekuanet",
    title: "DeepVekua: Geometric-Spectral Representation Learning for Physics-Informed Fields",
    authors: [
      { name: "Vladimer Khasia", isMe: true },

    ],
    venue: "arXiv",
    year: 2025,
    thumbnailUrl: "",
    abstract: "We present DeepVekua, a hybrid architecture that unifies geometric deep learning with spectral analysis to solve partial differential equations (PDEs) in sparse data regimes. By learning a diffeomorphic coordinate transformation that maps complex geometries to a latent harmonic space, our method outperforms state-ofthe-art implicit representations on advection-diffusion systems. Unlike standard coordinate-based networks which struggle with spectral bias, DeepVekua separates the learning of geometry from the learning of physics, solving for optimal spectral weights in closed form. We demonstrate a 100× improvement over spectral baselines. The code is available at https://github.com/VladimerKhasia/vekuanet.",
    links: {
      code: "https://github.com/VladimerKhasia/vekuanet",
      paper: "https://arxiv.org/abs/2512.12402", // Placeholder Arxiv
      pdf: "https://arxiv.org/pdf/2512.12402"
    },
    tags: ["Physics-Informed Neural Networks (PINNs)", "Geometric Deep Learning", "Spectral Neural Operators"]
  },
  {
    id: "vecua",
    title: "The Adaptive Vekua Cascade: A Differentiable Spectral-Analytic Solver for Physics-Informed Representation",
    authors: [
      { name: "Vladimer Khasia", isMe: true },

    ],
    venue: "arXiv",
    year: 2025,
    thumbnailUrl: "",
    abstract: "Coordinate-based neural networks have emerged as a powerful tool for representing continuous physical fields, yet they face two fundamental pathologies: spectral bias, which hinders the learning of high-frequency dynamics, and the curse of dimensionality, which causes parameter explosion in discrete feature grids. We propose the Adaptive Vekua Cascade (AVC), a hybrid architecture that bridges deep learning and classical approximation theory. AVC decouples manifold learning from function approximation by using a deep network to learn a diffeomorphic warping of the physical domain, projecting complex spatiotemporal dynamics onto a latent manifold where the solution is represented by a basis of generalized analytic functions. Crucially, we replace the standard gradientdescent output layer with a differentiable linear solver, allowing the network to optimally resolve spectral coefficients in a closed form during the forward pass. We evaluate AVC on a suite of five rigorous physics benchmarks, including high-frequency Helmholtz wave propagation, sparse medical reconstruction, and unsteady 3D Navier-Stokes turbulence. Our results demonstrate that AVC achieves state-of-the-art accuracy while reducing parameter counts by orders of magnitude (e.g., 840 parameters vs. 4.2 million for 3D grids) and converging 2-3× faster than implicit neural representations. This work establishes a new paradigm for memory-efficient, spectrally accurate scientific machine learning. The code is available at https://github.com/VladimerKhasia/vecua .",
    links: {
      code: "https://github.com/VladimerKhasia/vecua",
      paper: "https://arxiv.org/abs/2512.11776", // Placeholder Arxiv
      pdf: "https://arxiv.org/pdf/2512.11776"
    },
    tags: ["Implicit Neural Representations (INR)", "Scientific Machine Learning (SciML)", "Spectral Neural Networks"]
  },
  {
    id: "primal",
    title: "Primal: A Unified Deterministic Framework for Quasi-Orthogonal Hashing and Manifold Learning",
    authors: [
      { name: "Vladimer Khasia", isMe: true }, // Kept as first per request context, though usually Sartoretti is first

    ],
    venue: "arXiv",
    year: 2025,
    thumbnailUrl: "", // Handled by component
    abstract: "We present Primal, a deterministic feature mapping framework that harnesses the number-theoretic independence of prime square roots to construct robust, tunable vector representations. Diverging from standard stochastic projections (e.g., Random Fourier Features), our method exploits the Besicovitch property to create irrational frequency modulations that guarantee infinite non-repeating phase trajectories. We formalize two distinct algorithmic variants: StaticPrime, a sequence generation method that produces temporal position encodings empirically approaching the theoretical Welch bound for quasi-orthogonality; and DynamicPrime, a tunable projection layer for input-dependent feature mapping. A central novelty of the dynamic framework is its ability to unify two disparate mathematical utility classes through a single scaling parameter σ . In the low-frequency regime, the method acts as an isometric kernel map, effectively linearizing non-convex geometries to enable high-fidelity signal reconstruction. Conversely, the high-frequency regime induces chaotic phase wrapping, transforming the projection into a maximum-entropy one-way hash suitable for Hyperdimensional Computing and privacy-preserving Split Learning. Empirical evaluations demonstrate that Primal yields superior orthogonality retention and distribution tightness compared to normalized Gaussian baselines, establishing it as a computationally efficient, mathematically rigorous alternative to random matrix projections.",
    links: {
      code: "https://github.com/VladimerKhasia/primal",
      paper: "https://arxiv.org/abs/2511.20839",
      pdf: "https://arxiv.org/pdf/2511.20839"
    },
    tags: ["Manifold Learning", "Deterministic Feature Mapping", "Hyperdimensional Computing (HDC)"]
  },
  {
    id: "andi",
    title: "ANDI: Adaptive Norm-Distribution Interface",
    authors: [
      { name: "Vladimer Khasia", isMe: true },
 
    ],
    venue: "Zenodo",
    year: 2025,
    thumbnailUrl: "",
    abstract: "The optimization of deep neural networks is currently dominated by two paradigms: coordinate- wise adaptive methods (e.g., AdamW), which ignore parameter correlations, and higher-order struc- tural methods (e.g., K-FAC, Muon), which enforce geometric constraints but suffer from super-linear computational complexity. We introduce the Adaptive Norm-Distribution Interface (ANDI), a first-order optimizer that bridges this gap via structured preconditioning. ANDI applies an element- wise equilibration transformation derived from the additive equilibration of row and column norms, effectively approximating matrix balancing without iterative solvers or singular value decomposi- tion. We prove that ANDI strictly maintains descent directions and provides an implicit trust region bounded by the gradient energy. Empirically, ANDI matches the convergence of spectral methods on ResNet-9 (CIFAR-10) while maintaining the O(N ) computational profile of AdamW. Furthermore, on Transformer-based causal language modeling (NanoGPT), ANDI outperforms both diagonal and spectral baselines, suggesting that additive norm-equilibration serves as a superior in- ductive bias for attention-based architectures. Finally, we demonstrate scalability to the 8-billion parameter regime by fine-tuning Llama-3, where ANDI exhibits rapid convergence within the constrained optimization subspaces of Low-Rank Adaptation (LoRA). The code is available at https://github.com/VladimerKhasia/ANDI",
    links: {
      code: "https://github.com/VladimerKhasia/ANDI",
      paper: "https://doi.org/10.5281/zenodo.18087892" // Placeholder as specific ID not found, but updated venue
    },
    tags: ["Large Language Model Optimization", "First-Order Optimizers", "Structured Preconditioning"]
  },
  {
    id: "vekualayer",
    title: "The Vekua Layer: Exact Physical Priors for Implicit Neural Representations via Generalized Analytic Functions", // Inferred title
    authors: [
      { name: "Vladimer Khasia", isMe: true },
  
    ],
    venue: "arXiv",
    year: 2025,
    thumbnailUrl: "",
    abstract: "Implicit Neural Representations (INRs) have emerged as a powerful paradigm for parameterizing physical fields, yet they often suffer from spectral bias and the computational expense of non-convex optimization. We introduce the Vekua Layer (VL), a differentiable spectral method grounded in the classical theory of Generalized Analytic Functions. By restricting the hypothesis space to the kernel of the governing differential operator—specifically utilizing Harmonic and Fourier-Bessel bases—the VL ransforms the learning task from iterative gradient descent to a strictly convex leastsquares problem solved via linear projection. We evaluate the VL against Sinusoidal Representation Networks (SIRENs) on homogeneous elliptic Partial Differential Equations (PDEs). Our results demonstrate that the VL achieves machine precision (MSE ≈ 10−33) on exact reconstruction tasks and exhibits superior stability in the presence of incoherent sensor noise (MSE ≈ 0.03), effectively acting as a physics-informed spectral filter. Furthermore, we show that the VL enables “holographic” extrapolation of global fields from partial boundary data via analytic continuation, a capability absent in standard coordinate-based approximations.",
    links: {
      // code: "",
      paper: "https://www.arxiv.org/abs/2512.11138",
      pdf: "https://www.arxiv.org/pdf/2512.11138"
    },
    tags: ["Implicit Neural Representations (INR)", "Physics-Informed Neural Networks (PINNs)", "Spectral Methods"]
  }
];

export const EXPERIENCES = [
  {
    role: "Research Assistant",
    company: "Robotics Lab, TSU",
    period: "2021 - Present",
    description: "Leading research on multi-agent systems and reinforcement learning algorithms."
  },
  {
    role: "Machine Learning Intern",
    company: "Tech Innovators Inc.",
    period: "Summer 2022",
    description: "Developed computer vision models for automated quality control."
  }
];

export const EDUCATION = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Tbilisi State University",
    year: "In Progress"
  },
  {
    degree: "M.Sc. in Applied Mathematics",
    institution: "I. Vekua Institute",
    year: "2021"
  }
];