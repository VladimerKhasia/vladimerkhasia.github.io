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
    id: "HDPL",
    title: "Hybrid Dual-Path Linear Transformations for Efficient Transformer Architectures", 
    authors: [
      { name: "Vladimer Khasia", isMe: true },
  
    ],
    venue: "arXiv",
    year: 2026,
    thumbnailUrl: "",
    abstract: "Standard Transformer architectures rely heavily on dense linear transformations, treating feature projection as a monolithic, full-rank operation. We argue that this formulation is inefficient and lacks the structural inductive bias necessary for distinguishing between local feature preservation and global context integration. To address this, we introduce the Hybrid Dual-Path Linear (HDPL) operator, which decomposes the affine transformation into two topologically distinct pathways: a sparse block-diagonal component for high-rank local processing, and a low-rank Variational Autoencoder (VAE) bottleneck for global context regularization. By "surgically" replacing specific projections (Query, Key, Value, Gate, Up) with HDPL operators while retaining standard dense layers for aggregation (Output, Down), we achieve a superior balance of efficiency and representational power. Experiments on the FineWeb-Edu dataset demonstrate that the HDPL architecture outperforms a standard Llama-style baseline, reducing validation loss while simultaneously reducing parameter count by 6.8%. Beyond immediate performance gains, we discuss how the explicit materialization of a probabilistic latent space within the Transformer backbone serves as a vital architectural affordance, offering new pathways for inference-time or hypernetwork induced control, continual adaptation, interpretability, and cross-model or cross-modal synchronization.",
    links: {
      code: "https://github.com/VladimerKhasia/HDPL",
      paper: "https://arxiv.org/abs/2602.07070",
      pdf: "https://arxiv.org/pdf/2602.07070"
    },
    tags: ["Hybrid Dual-Path Linear", "Transformer Efficiency", "Adaptive And Continual Learning"]
  }, 
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
      code: "https://github.com/VladimerKhasia/DSC",
      paper: "https://arxiv.org/abs/2512.23448",
      pdf: "https://arxiv.org/pdf/2512.23448"
    },
    tags: ["Dynamic Subspace Composition", "Mixture of Experts (MoE)", "Contractive Basis Expansion"]
  },  
  {
    id: "minisp",
    title: "Model Minification: A Taylor-Ridge Framework for Structured Compression",
    authors: [
      { name: "Vladimer Khasia", isMe: true },
 
    ],
    venue: "ResearchGate",
    year: 2026,
    thumbnailUrl: "",
    abstract: "As Large Language Models (LLMs) scale, the deployment cost on commodity hardware becomes prohibitive. While unstructured pruning offers theoretical compression, it often requires specialized kernels to realize speedups. We propose a robust Structured Minification framework that physically reduces the intermediate dimensions of Transformer MLPs, ensuring compatibility with standard GEMM operations. Our methodology combines (1) a global Taylor-First-Order sensitivity analysis to identify redundant feature dimensions, and (2) a closed-form Ridge Regression reconstruction to optimally heal the output distribution of the pruned layers. We investigate the efficacy of this approach across model scales, applying it to a parameter-dense 135M model and a 1.7B model. Our results demonstrate that minification is highly effective even for smaller, dense models at high retention rates: the 135M model retains significant coherence at 90% retention (Perplexity 4.33 → 4.89). Furthermore, we observe a strong scaling law: the 1.7B model exhibits remarkable robustness, tolerating 30% structural removal with only minor degradation (Perplexity 3.16 → 4.09). This suggests that while smaller models require conservative minification (80-90% retention), larger over-parameterized models possess a highly compressible subspace recoverable via linear least-squares. Furthermore, because our framework reduces model topology without altering weight precision, it remains strictly orthogonal to quantization, enabling composite compression pipelines that leverage both structural minification and subsequent bit-width reduction. The code is available at https://github.com/VladimerKhasia/minisp",
    links: {
      code: "https://github.com/VladimerKhasia/minisp",
      paper: "https://www.researchgate.net/publication/399829361_Model_Minification_A_Taylor-Ridge_Framework_for_Structured_Compression", // Placeholder as specific ID not found, but updated venue
      pdf: "https://github.com/VladimerKhasia/minisp/blob/main/SP.pdf"
    },
    tags: ["LLM Compression", "Structured Pruning", "Efficient Inference"]
  },  
  {
    id: "HASVQ",
    title: "HAS-VQ: Hessian-Adaptive Sparse Vector Quantization for High-Fidelity LLM Compression", 
    authors: [
      { name: "Vladimer Khasia", isMe: true },
  
    ],
    venue: "arXiv",
    year: 2026,
    thumbnailUrl: "",
    abstract: "Post-training quantization is essential for deploying Large Language Models (LLMs) on resourceconstrained devices. However, standard integer quantization (e.g., INT4) fundamentally degrades performance by imposing a uniform grid on the heavy-tailed distribution of weight parameters, particularly in smaller-scale models (e.g., <2B parameters). We introduce HAS-VQ (Hessian-Adaptive Sparse Vector Quantization), a compression framework that strictly decouples high-sensitivity outliers from the bulk weight distribution using second-order sensitivity analysis. HAS-VQ employs a Hessian-Masked Decoupling strategy to isolate sensitive parameters, followed by robust Vector Quantization (VQ) of the remaining dense body. Crucially, we introduce a residual sparse feedback mechanism that corrects quantization errors in the most sensitive dimensions, ensuring exact reconstruction of outliers. We evaluate HAS-VQ on SmolLM2-1.7B, demonstrating two distinct regimes of superiority: (1) Pareto Dominance over Integer Baselines: At 4.23 effective bits-per-parameter (BPP), we achieve a perplexity of 14.23, significantly outperforming the standard INT4 baseline (20.03 PPL at 4.71 BPP). (2) High-Fidelity Compression: Relative to the FP16 baseline, HAS-VQ achieves a 2.3× reduction in model size (7.03 BPP) while maintaining statistically indistinguishable perplexity (10.12 vs. 10.04), effectively offering a lossless compression alternative for bandwidth-constrained environments.",
    links: {
      code: "https://github.com/VladimerKhasia/HASVQ",
      paper: "https://arxiv.org/abs/2601.06959",
      pdf: "https://arxiv.org/pdf/2601.06959"
    },
    tags: ["Near-Lossless Compression: 2.3× Size Reduction with FP16 Accuracy", "Outperforms Standard INT4 Quantization", "Hessian-Masked Decoupling & Residual Feedback"]
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
      paper: "https://doi.org/10.5281/zenodo.18087892", 
      pdf: "https://github.com/VladimerKhasia/ANDI/blob/main/ANDI_v7.pdf"
    },
    tags: ["Large Language Model Optimization", "First-Order Optimizers", "Structured Preconditioning"]
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
    id: "SWH",
    title: "Spectral-Window Hybrid (SWH)", 
    authors: [
      { name: "Vladimer Khasia", isMe: true },
  
    ],
    venue: "arXiv",
    year: 2026,
    thumbnailUrl: "",
    abstract: "Scaling sequence modeling to extreme contexts requires balancing computational efficiency with rep- resentational expressivity. While Transformers provide precise retrieval via the attention mechanism, their quadratic O(T2) complexity limits their application to long-horizon tasks. In this work, we propose the Spectral-Window Hybrid (SWH), an architecture that decouples sequence modeling into two parallel streams: a global branch utilizing the Convolution Theorem to model long-range decay dynamics in O(T log T ) time, and a local branch employing sliding-window attention for token interactions within a bounded context. By aggregating these representations, SWH avoids the computational bottleneck of global attention while retaining local precision. We demonstrate that SWH matches the perplexity of standard Transformers on short contexts while enabling efficient linear scaling to extended sequences.",
    links: {
      code: "https://github.com/VladimerKhasia/SWH",
      paper: "https://arxiv.org/abs/2601.01313",
      pdf: "https://arxiv.org/pdf/2601.01313"
    },
    tags: ["Efficient Long-Context Modeling", "Hybrid Transformer Architectures", "Linear Complexity Attention"]
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
  },
  {
    id: "DSA",
    title: "Differentiable Spectral Arithmetic: Computing the L-Invariant via Automatic Differentiation",
    authors: [
      { name: "Vladimer Khasia", isMe: true },
 
    ],
    venue: "Zenodo",
    year: 2025,
    thumbnailUrl: "",
    abstract: "We present a computational framework for determining the Greenberg-Stevens L-invariant of elliptic curves with split multiplicative reduction using p-adic Automatic Differentiation (AD). Standard methods often rely on numerical finite differences, which suffer from stability issues: in Archimedean fields, they face floating-point cancellation, while in p-adic fields, they face precision exhaustion. We demonstrate that by formalizing the al- gebra of p-adic Dual Numbers, we can treat the Frobenius operator on Monsky-Washnitzer cohomology as a differentiable program. We provide an analogous computational model in JAX to demonstrate stability, reporting an execution time of 0.089s for dimension 800 via JIT compilation, alongside a reference p-adic algebraic implementation verified for correct- ness.",
    links: {
      paper: "https://doi.org/10.5281/zenodo.18086866" // Placeholder as specific ID not found, but updated venue
    },
    tags: ["p-adic Automatic Differentiation", "Greenberg-Stevens L-invariant", "Differentiable Number Theory"]
  },

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