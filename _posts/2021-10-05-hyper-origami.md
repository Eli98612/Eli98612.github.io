---
layout: post
title: Hyper Origami
date: 2021-10-05
description: an example of a blog post with twitter
---


Suppose we have a $$1\times 1$$ square sheet of paper. Rotating the paper gives us the left image in the figure below. We can then "fold" or "wrap" the corners

If we consider the sheet to have uniform mass, the act of folding the corners redistributes the mass. For example, a region with two layers of paper overlapping (shaded darker accordingly) is "twice as dense" as the original sheet.

If we take the total mass to be $$1$$ (so that we're working with probability mass), we can compute the folded sheet's covariance matrix to get an idea of how the probability mass is spread.


<div class="row justify-content-around align-items-center">
    <div class="col-sm-4">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hyporg-2d.png' | relative_url }}" alt="" title="example image">
    </div>
    <div class="col-sm-4">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hyporg-wrapped2d.png' | relative_url }}" alt="" title="example image">
    </div>
</div>
<div class="caption">
    wrapped 2d sheet
</div>


Let's now consider an $$n$$-dimensional unit cube, that is 