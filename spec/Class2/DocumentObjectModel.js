/**
 * Document Object Model (DOM)
 * 
 *      is a html-document
 * 
 *      <tag1>      ->      starting of tag1
 * 
 *      </tag1>     ->      closing of tag1
 *      NOTE: tagName cannot have spaces
 *      Ex: html, body, head, div, script, form, input, button
 * 
 * 
 * 
 * <tag1  attr1="val1" attr2="val2" attr3 attr4="val4" attr5>
 * 
 * tagName  ->   tag1
 * attributes of tag1   -> attr1, attr2, attr3, attr4, attr5
 * NOTE: attribute-names cannot have spaces
 * NOTE: attributes can have value (with or without spaces)
 * 
 * Value of attr1 = "val1"
 * Value of attr2 = "val2"
 * Value of attr3 = none
 * Value of attr4 = "val4"
 * Value of attr5 = none
 * 
 * 
 * <input type="text" class="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal_email" placeholder="Email or phone number" autofocus="1" aria-label="Email or phone number">
 * 
 * tag : input
 * attributes -> type, class, id, placeholder, name, data-testid, autofocus, aria-label
 *      type="text"
 *      class="inputtext _55r1 _6luy"
 *      name="email"
 *      id="email"
 *      data-testid="royal_email"
 *      placeholder="Email or phone number"
 *      autofocus="1"
 *      aria-label="Email or phone number"
 * 
 * 
 * NOTE: any data is between the starting of tag and closing of tag is Text of the tag
 * 
 * <tag1 attr1="val1" attr2="val2" attr3 attr4="val4" attr5>ABCD EFGH</tag1>
 * tagName  ->   tag1
 * attributes of tag1   -> attr1, attr2, attr3, attr4, attr5
 *      Value of attr1 = "val1"
 *      Value of attr2 = "val2"
 *      Value of attr3 = none
 *      Value of attr4 = "val4"
 *      Value of attr5 = none
 * 
 * text of tag1     ->  "ABCD EFGH"
 * 
 * 
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value four", attr5="5">
 *      <tag2 attr11="value11" attr12="value twelve">
 *          "text value"
 *      </tag2>
 *      <tag3 attr21="value21" attr22="value twenty two">
 *          "text value again"
 *      </tag3>
 * </tag1>
 * 
 * 
 * which tags are directly inside tag2  ->  none
 * which tags are directly inside tag1  ->  tag2, tag3
 * 
 * text of tag1 ->  none
 * text of tag2 ->  "text value"
 * text of tag3 ->  "text value again"
 * 
 */
