---
layout: post
title: Intro to Steganography
date: 2021-10-05
description: #
---

Steganography is the practice of concealing a message within a physical object. 

For example, Alice sends letters to Bob ostensibly about her holiday vacations, but she always includes a covert message that only Bob can read. For one letter, Bob reads off every sixth word to extract the hidden message. For another letter, Bob uses a blacklight to reveal a secret message written using invisible ink. 

The content about the vacations is referred to as the *cover* text. The method used to hide information, e.g. invisible ink, is known as the *stego scheme*. If a particular letter to Bob contains a hidden message, we call it a *stego* object. Other examples of cover objects include images, shopping lists, posters, songs---pretty much any media used to communicate a lot of information.

Suppose an eavesdropper named Eve obtains the stego letters. If Alice's scheme is subtle enough, Eve may be deceived into believing that no secret communication is occuring.

## Steganography of Digital Images

The left image below contains a picture of a landscape embedded in its 7th and 8th <a href="https://en.wikipedia.org/wiki/Bit_plane">bit planes</a>. Try hovering over the image with the mouse cursor to reveal the hidden picture. Notice that the landscapes's color palette is quite limited since only 6 bits are used per pixel (24-bit is normally used for RGB formats).

<div class="row justify-content-around align-items-center">
    <div class="col-sm-5">
      <div class="img-stack">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/8_steg.png' | relative_url }}" alt="" title="example image">
        <div class="stacklens">
          <img class="img-back" src="{{ '/assets/img/8_steg_msg.png' | relative_url }}" alt="">
        </div>
      </div>
    </div>
    <div class="col-sm-5">
      <div class="img-stack">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/stego_example.png' | relative_url }}" alt="" title="example image">
        <div class="stacklens">
          <img class="img-back" src="{{ '/assets/img/stego_changes_example.png' | relative_url }}" alt="">  
        </div>
      </div>
    </div>
</div>
<div class="caption">
    Examples of stego images—hover over them to see what's hidden! Left: The image of the door and window is embedded with a picture of a landscape with hot-air balloons. Right: a message is embedded by increasing or decreasing pixel values by 1. Pixel changes are shown in white. Changes are frequently made in regions of complex content to make the embedding more secure.
</div>


## Utility and Applications

Why doesn't Alice just use Cryptography? Encrypting her messages will prevent Eve from reading her private messages... 

Encrypted messages are often in the form of unintelligible garble. Therefore, Eve will be suspicious of an encrypted message in plain sight no matter how unbreakable it is. 

On the contrary, steganographic messages attempt to avoid scrutiny by concealing the fact that secret information is being communicated all together.