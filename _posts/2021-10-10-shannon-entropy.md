---
layout: post
title: Shannon Entropy
date: 2099-10-10
description: #
---

The objective for this chapter is to introduce entropy, relative entropy, and mutual information.

## Discrete Entropy

In this section, we focus exclusively on discrete random variables with realizations in a discrete set, or alphabet, $$\mathcal X$$.   

<span class="theorem" thm-type="Definition" thm-name='Entropy'>
Let $$X$$ be a r.v. with pmf $$\mathbb{P}(x)$$. The <b>entropy</b> is defined as
\begin{equation}
H(X) = - \sum_{x\in\mathcal{X}}{P(x)\log P(x)}
\end{equation}
</span>

An equivalent formulation of entropy is $$H(X) = \EE_P\left[\log \frac{1}{P(x)}\right]$$. We can think of
$$\log \frac{1}{P(x)}$$ as a type of "surprise function" or "uncertainty function". Therefore, we can think of entropy as the expected "surprise" or "uncertainty" of a random variable.

\begin{intuition}
Entropy is the minimum number of bits required (on average) to convey the outcome of a random variable.
\end{intuition}


Next is Kullback–Leibler divergence.

\begin{definition}[Kullback–Leibler Divergence]
The \textbf{Kullback–Leibler (KL) divergence} between probability distributions $P$ and $Q$ is defined as
\[
    D_{KL}\left(P||Q\right) = \sum_{x\in\Xcalp}{P(x)\log\left(\frac{P(x)}{Q(x)}\right)}.
\]
\textbf{KL divergence} is also known as \textbf{relative entropy}.
\end{definition}

\begin{proposition}[Properties of KL Divergence]

\end{proposition}


We now show an important result involving discrete entropy.

\begin{proposition}[Uniform Distribution Maximizes Entropy]
For arbitrary $X$ with pmf $P$, we have
\[
    H(X) \leq \log\lvert\Xcalp\rvert
\]
with equality if and only if $X$ is uniformly distributed.
\end{proposition}

\begin{proofbox}
Let $Q(x)=\frac{1}{\lvert\Xcalp\rvert}, \forall x\in\Xcalp$. We have
\begin{align*}
    0 &\leq D_{KL}\left(P||Q\right) \\
    &= \sum_{x\in\Xcalp}{P(x)\log\left(\frac{P(x)}{Q(x)}\right)} \\
    &=  \sum_{x\in\Xcalp}{P(x)\log P(x)} - \sum_{x\in\Xcalp}{P(x)\log Q(x)} \\
    &=  -H_P(X) + \log\lvert\Xcalp\rvert\sum_{x\in\Xcalp}{P(x)} \\
    \iff H_P(X) &\leq \log\lvert\Xcalp\rvert
\end{align*}
as desired.
\end{proofbox}

There are several approaches we could have taken for the above proof (e.g. using calculus); however, we can make use of the non-negativity of KL divergence instead without too much computation. In general, KL divergence can be a very powerful tool for obtaining upper or lower bounds.






\section{Differential Entropy}


\begin{definition}[Differential Entropy]
Let $X$ be a r.v. with pdf $f(x)$. The \textbf{differential entropy} is defined as
\[
    h(X) = - \int_{\Xcalp}{f(x)\log f(x)\;dx}
\]
\end{definition}


\begin{proposition}[Gaussian Distribution Maximizes Differential Entropy]
For arbitrary $X$ with pdf $f$ and constrained second moment $\EE\left[X^2\right]\leq\sigma^2$, we have
\[
    h(X) \leq \frac{1}{2}\log 2\pi e\sigma^2
\]
with equality if and only if $X\sim \Ncalp\left(0,\sigma^2\right)$.
\end{proposition}

\begin{proofbox}
Let $g$ be the pdf for some $Y \sim \Ncalp\left(0,\sigma^2\right)$. Using the fact that 
\[
\log g(u) = - \frac{1}{2}\log 2\pi\sigma^2 - \frac{u^2}{2\sigma^2}
\]
we have
\begin{align*}
    0 &\leq D_{KL}\left(f||g\right) \\
    &=  \int_{\Xcalp}{f(u)\log\left(\frac{f(u)}{g(u)}\right)\;du} \\
    &=  \int_{\Xcalp}{f(u)\log f(u)\;du} - \int_{\Xcalp}{f(u)\log g(u)\;du} \\
    &=  -h(X) + \frac{1}{2}\log 2\pi\sigma^2\int_{\Xcalp}{f(u)\;du} + 
        \frac{1}{2\sigma^2}\int_{\Xcalp}{u^2f(u)\;du} \\
    &\leq  -h(X) + \frac{1}{2}\log 2\pi\sigma^2 + 
        \frac{1}{2\sigma^2}\sigma^2 \\
    \iff h(X) &\leq \frac{1}{2}\log 2\pi e\sigma^2
\end{align*}
as desired.
\end{proofbox}
