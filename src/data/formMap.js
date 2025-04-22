import Intensity from '../components/Step/Intensity.vue';
import Location from '../components/Step/Location.vue';
import Activity from '../components/Step/Activity.vue';

export default [
  {
    title: "Intensity",
    detail:
      "Describe the intensity of the craving on a scale of 1 to 5, with 1 being mild and 5 being intense.",
    component: Intensity,
    data: [
      {
        property: "intensity",
        type: Number,
      },
    ],
  },
  {
    title: "Location",
    detail: "Where did the craving occur?",
    component: Location,
    data: [
      {
        property: "location",
        type: String,
      },
      {
        property: "space",
        type: String,
      },
    ],
  },
  {
    title: "Activity",
    detail: "What were you doing when the craving occured?",
    component: Activity,
    data: [
      {
        property: "activity",
        type: String,
      },
    ],
  },
  {
    data: [
      {
        property: "trigger",
        type: String,
      },
    ],
    title: "Triggers",
    detail: "Did you notice anything specific which set off the craving?",
    canSkip: true,
    default: `I don't know`,
  },
  {
    data: [
      {
        property: "vulnerabilities",
        type: Array,
      },
    ],
    title: "Vulnerabilities",
    detail:
      "Are there any factors which might be making you more vulnerable to cravings?",
    canSkip: true,
    default: `I don't think so`,
  },
  {
    data: [
      {
        property: "mood",
        type: Array,
      },
    ],
    title: "Emotional state",
    detail: "Describe your mood when the craving occured.",
  },
  {
    data: [{
      property: 'strategy',
      type: String
    }],
    title: "Coping strategy",
    detail:
      "Did you use any strategies or techniques to try to manage this craving?",
    canSkip: true,
    default: 'None'
  },
  {
    data: [{
      property: 'result',
      type: String, // ???
    }],
    title: "Effectiveness / Result",
    detail: "How effective was this strategy in alleviating the craving?",
  },
];
