if (self.CavalryLogger) { CavalryLogger.start_js(["qFajl"]); }

__d("MessengerPollStickerVotedMutation",["RelayCompat","MessengerPollStickerVotedMutation.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayCompat").commitMutation;b("RelayCompat").graphql;var h={modern:function(){return b("MessengerPollStickerVotedMutation.graphql")},classic:function(a){return{kind:"OperationDefinition",argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"input"}],name:"MessengerPollStickerVotedMutation",operation:"mutation",node:function(){return{calls:[{kind:"Call",metadata:{},name:"vote_story_card_poll",value:{kind:"CallVariable",callVariableName:"input"}}],children:[{children:[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"},{fieldName:"can_viewer_vote",kind:"Field",metadata:{},type:"Boolean"},{children:[{fieldName:"index",kind:"Field",metadata:{},type:"Int"},{fieldName:"text",kind:"Field",metadata:{},type:"String"},{fieldName:"vote_count",kind:"Field",metadata:{},type:"Int"}],fieldName:"poll_options",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"StoryCardPollOption"},{fieldName:"viewer_vote_index",kind:"Field",metadata:{},type:"Int"}],fieldName:"story_card_poll",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"StoryCardPoll"},{fieldName:"client_mutation_id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],directives:[{kind:"Directive",name:"fb_owner",args:[{name:"oncall",value:{kind:"CallValue",callValue:"messenger_montage_www"}}]}],kind:"Mutation",metadata:{inputType:"VoteStoryCardPollData!"},name:"MessengerPollStickerVotedMutation",responseType:"VoteStoryCardPollResponsePayload"}}()}}};function a(a,b,c,d){return g(a,{mutation:h,variables:c,onCompleted:d&&d.onSuccess,onError:d&&d.onError,optimisticResponse:function(){return i(b,c)}})}function i(a,b){a=a.montage_overlays.find(function(a){return a.poll==null||a.poll.id==null?!1:a.poll.id===b.input.story_card_poll_id});if(a==null||a.poll==null||a.poll.poll_options==null)return null;a=a.poll.poll_options.map(function(a,c){if(c===b.input.option)return babelHelpers["extends"]({},a,{vote_count:a.vote_count+1});else return a});return{vote_story_card_poll:{story_card_poll:{id:b.input.story_card_poll_id,can_viewer_vote:!1,poll_options:a,viewer_vote_index:b.input.option}}}}e.exports=a}),null);