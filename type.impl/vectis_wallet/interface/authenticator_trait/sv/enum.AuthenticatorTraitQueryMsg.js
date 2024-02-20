(function() {var type_impls = {
"vectis_wallet":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.dispatch\" class=\"method\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><h4 class=\"code-header\">pub fn <a href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html#tymethod.dispatch\" class=\"fn\">dispatch</a>&lt;C: <a class=\"trait\" href=\"vectis_wallet/interface/authenticator_trait/trait.AuthenticatorTrait.html\" title=\"trait vectis_wallet::interface::authenticator_trait::AuthenticatorTrait\">AuthenticatorTrait</a>&gt;(\n    self,\n    contract: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;C</a>,\n    ctx: (Deps&lt;'_, Empty&gt;, Env)\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Binary, C::<a class=\"associatedtype\" href=\"vectis_wallet/interface/authenticator_trait/trait.AuthenticatorTrait.html#associatedtype.Error\" title=\"type vectis_wallet::interface::authenticator_trait::AuthenticatorTrait::Error\">Error</a>&gt;</h4></section><section id=\"method.authenticate\" class=\"method\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><h4 class=\"code-header\">pub fn <a href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html#tymethod.authenticate\" class=\"fn\">authenticate</a>(\n    signed_data: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>&gt;,\n    controller_data: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>&gt;,\n    metadata: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>&gt;&gt;,\n    signature: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>&gt;\n) -&gt; Self</h4></section><section id=\"method.contract_version\" class=\"method\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><h4 class=\"code-header\">pub fn <a href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html#tymethod.contract_version\" class=\"fn\">contract_version</a>() -&gt; Self</h4></section></div></details>",0,"vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-Debug-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<section id=\"impl-StructuralPartialEq-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-StructuralPartialEq-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section>","StructuralPartialEq","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryResponses-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-QueryResponses-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl QueryResponses for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.response_schemas_impl\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.response_schemas_impl\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">response_schemas_impl</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, RootSchema&gt;</h4></section><section id=\"method.response_schemas\" class=\"method trait-impl\"><a href=\"#method.response_schemas\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">response_schemas</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, RootSchema&gt;, IntegrityError&gt;</h4></section></div></details>","QueryResponses","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-JsonSchema-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-JsonSchema-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl JsonSchema for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.schema_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.schema_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">schema_name</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a></h4></section></summary><div class='docblock'>The name of the generated JSON Schema. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.schema_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.schema_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">schema_id</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns a string that uniquely identifies the schema produced by this type. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.json_schema\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.json_schema\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">json_schema</a>(gen: &amp;mut SchemaGenerator) -&gt; Schema</h4></section></summary><div class='docblock'>Generates a JSON Schema for this type. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_referenceable\" class=\"method trait-impl\"><a href=\"#method.is_referenceable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_referenceable</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Whether JSON Schemas generated for this type should be re-used where possible using the <code>$ref</code> keyword. <a>Read more</a></div></details></div></details>","JsonSchema","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-Clone-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-PartialEq-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-AuthenticatorTraitQueryMsg\" class=\"impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#impl-Serialize-for-AuthenticatorTraitQueryMsg\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"vectis_wallet/interface/authenticator_trait/sv/enum.AuthenticatorTraitQueryMsg.html\" title=\"enum vectis_wallet::interface::authenticator_trait::sv::AuthenticatorTraitQueryMsg\">AuthenticatorTraitQueryMsg</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vectis_wallet/interface/authenticator.rs.html#10\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","vectis_wallet::interface::authenticator::authenticator_trait::sv::QueryMsg"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()