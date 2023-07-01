/**
 * Document Object Model (DOM)
 * 

 * <tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *     <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
 *         <tag3>Not Unique Text
 *              <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         </tag3>
 *         <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
 *         <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
 *         <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 31</tag31>
 *     </tag2>
 *     <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <a attr1="value1" attr2="value2">Unique Text 4</tag>
 *          <a attr1="value1" attr2="value2">Unique Text 4</tag>
 *     </tag4>
 *     <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag>
 *     </tag6>
 * </tag1>
 * 
 * 
 * children on tag1     ->  tag2, tag4, tag6 (3)
 * children of tag11    ->  0
 * children of tag2     ->  tag3, tag11, tag21, tag31 (4)
 * 
 * sibling of tag4      ->  tag2, tag6 (parent - tag1)
 * sibling of tag7      ->  0
 * 
 * following-sibling (sibling-tags which apprearing in the dom after the tag)
 * following-sibling of tag4    ->  tag6 (parent: tag1)
 * following-sibling of tag21   ->  tag31 (parent: tag2)
 * 
 * preceding-sibling (sibling-tags which apprearing in the dom before the tag)
 * preceding-sibling of tag4    ->  tag2 (parent: tag1)
 * preceding-sibling of tag21   ->  tag11, tag3 (parent: tag2)
 * 
 * following (any starting-tags which apprearing in the dom after the tag)
 * following of tag4        ->   a, a, tag6, tag7
 * following of tag3        ->   subTag, tag11, tag21, tag31, tag4, a, a, tag6, tag7
 * 
 * preceding (any starting-tags which apprearing in the dom before the tag)
 * preceding of tag4        ->  tag31, tag21, tag11, subTag, tag3, tag2, tag1
 * 
 * 
 */
