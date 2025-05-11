---
layout: post
title: What is Steganography?
date: 2021-10-05
description: #
---

As our dependence on digital communication grows, so too does the importance of addressing questions of privacy. The most common way to protect sensitive information and private messages is via encryption. Encryption renders a message unreadable by scrambling its letters and characters, effectively concealing its content—but not its existence. An eavesdropper can readily tell when encryption is used, making it easy for authorities to impose restrictions. For example, some digital platforms require users to share secret keys with the company, and certain authoritarian governments have outlawed encryption. If such rules are opposed, users may be flagged, whistleblowers may be censored, and citizens fearing persecution may be investigated or even jailed.

One solution is to use a method of covert communication called steganography, the focus of my graduate research. Steganography conceals the very existence of a secret message by embedding it within some innocuous object. A quintessential example is the use of invisible ink; a message can only be revealed by those aware of its presence using a black light. Given the proliferation of digital media, popular methods of steganography hide information within digital images by making small changes (imperceptible to the human eye) to pixels. 

Just like any technology, steganography can be abused by bad actors. Thus, the practice of detecting steganography—called steganalysis—is of particular interest to government organizations for the purposes of espionage, antiterrorism, and mass surveillance efforts.

## Examples

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