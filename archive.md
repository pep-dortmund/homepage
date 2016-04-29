---
title: Archiv
subtitle: Alle unsere Posts in anti-chronologischer Reihenfolge
layout: page-custom
---

{% for post in site.posts %}
  <section class="box special post">
    {% if post.image %}
    <span class="image featured"><img src="{{ post.image | prepend:site.baseurl }}" alt=""></span>
    {% endif %}
    <h3>{{ post.title }}</h3>
    {{ post.content  }}
    {% include post-footer.html post=post %}
  </section>
{% endfor %}
