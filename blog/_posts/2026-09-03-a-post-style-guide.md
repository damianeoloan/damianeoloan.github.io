---
layout: post
# Required, YYYY-MM-DD via filename (no date: key)
title:  A Post Style Guide  # Required, string
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Donec a diam lectus.]({{ page.url }}) Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor[^1]. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.

## This is a h2

### This is a h3

#### This is a h4

##### This is a h5

###### This is a h6

> Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.

| Header 1 | Header 2 | Header 3 |
|:---------|:---------|:---------|
| row 1, col 1   | row 1, col 2 | row 1, col 3 |
| row 2, col 1   | row 2, col 2 | row 2, col 3 |
|=====

- Curabitur dapibus enim sit amet elit pharetra tincidunt
- feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan.
- Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9l8IgIouCjc" title="Video Placeholder - 5 seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

1. Curabitur dapibus enim sit amet elit pharetra tincidunt
2. feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan.
3. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.

term
: definition
: another definition

{% highlight html %}
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
{% endhighlight %}

`{% raw %}{% for cat in site.cats %}{% endraw %}`

[^1]: This is a footnote.
