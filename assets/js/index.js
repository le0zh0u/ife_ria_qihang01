
$(function() {

  var md = new Remarkable('commonmark');

  function updateViewTextarea(){
    var source = $('.source').val();
    var markdown = md.render(source);
    $('.result-html').html(markdown);
  }

  console.log(md.render('# Remarkable rulezz!'));
  // => <h1>Remarkable rulezz!</h1>
  $(".source").val("---\r__Advertisement :)__\r- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\rresize in browser.\r- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\ri18n with plurals support and easy syntax.\rYou will like those projects!\r---");
  /*

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,

Remarkable -- awesome

&quot;Smartypants, double quotes&quot;

'Smartypants, single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Deleted text~~

Superscript: 19^th^

Subscript: H~2~O

++Inserted text++

==Marked text==


## Blockquotes


&gt; Blockquotes can also be nested...
&gt;&gt; ...by using additional greater-than signs right next to each other...
&gt; &gt; &gt; ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
* Ac tristique libero volutpat at
+ Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

// Some comments
line 1 of code
line 2 of code
line 3 of code


Block code &quot;fences&quot;

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ &quot;title text!&quot;)

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg &quot;The Stormtroopocat&quot;)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  &quot;The Dojocat&quot;


## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

and multiple paragraphs.

[^second]: Footnote text.


## Definition lists

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

    { some code, part of Definition 2 }

Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b


## Abbreviations

This is HTML abbreviation example.

It converts &quot;HTML&quot;, but keep intact partial entries like &quot;xxxHTMLyyy&quot; and so on.

*[HTML]: Hyper Text Markup Language

  */
  updateViewTextarea();

  $('.source-submit').click(function(){
    updateViewTextarea();
  });
  
});
