<<template>
  <div class="content-card">
    <h1 class="featured-header">100 Thieves Schedule</h1>
    <v-tabs fixed centered>
        <v-tabs-bar class="my-bar">
          <v-tabs-slider class="my-slider"></v-tabs-slider>
          <v-tabs-item
          v-for="i in items"
          :key="i.game"
          :href="'#tab-' + i.game"
          >
          <h3 class="large-tab-head">
              {{ i.game }}
          </h3>
          <h3 class="small-tab-head">
              {{ i.smallGame }}
          </h3>
      </v-tabs-item>
  </v-tabs-bar>

  <v-tabs-items class="sched">
    <v-tabs-content
    v-for="i in items"
    :key="i.game"
    :id="'tab-' + i.game"
    >
    <v-card flat>
        <v-card-text>
            <div class="schedule-column">
                <div class="sched-info">
                    <h3> Next Event: </h3>
                    <h4> {{ i.smallEvent.title }} </h4>
                    <h4> {{ i.smallEvent.date }} </h4>
                </div>
                <div class="sched-img">
                    <img :src="i.smallEvent.image">
                </div>
            </div>
        </v-card-text>
    </v-card>
</v-tabs-content>
</v-tabs-items>
</v-tabs>
</div>
</template>
<script>
export default {
  data() {
      return {
          items: [{
            game: 'League of Legends',
            smallGame: 'LoL',
            smallEvent: {title: 'LCS 100T vs OpTiC Gaming', date: 'January 20th 6:00PM EST', image: '/static/images/nalcs.png'},
            events: ['LCS vs TSM - W', 'LCS vs Liquid - 4:00pm', '', '', '', '', 'LCS vs GGS - 3:00pm' ]
        }, 
        {
            game: 'CS:GO',
            smallGame: 'CS:GO',
            smallEvent: {title: 'ELEAGUE Boston Major', date: 'January 26-28th 2018', image: '/static/images/eleagueBoston.png'},
            events: ['LCS vs TSM - W', 'LCS vs Liquid - 4:00pm', '', '', '', '', 'LCS vs GGS - 3:00pm' ]
        }
        ]
        
      }
  }
}
</script>
<style>
.tabs {
  box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
  height: 24.5em;
}
.tabs__items {
  background-color:#2d2b2b;
}
.card {
    padding: 0 1em;
    height: 100% !important;
}
.card__text {
    padding: 0 .3em !important;
    height: 100%;
    
}
.my-bar {
    background-color: #0f0f0f;
}
.my-slider {
    background-color: #C71C26;
    border-color: #C71C26;
}
.small-tab-head {
    display: none;
}
.sched {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 21em;
}
.schedule-column {
    display: flex;
    justify-content: space-around;
    height: 100%;
}
.sched-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.sched-img {
    display: flex;
    align-items: center;
    justify-content: center;
}
.tabs__content{
    height: 100%;
}
.schedule-column img {
    width: 15em;
}
@media (min-width: 1300px) {
    .sched-info {
        font-size: 1.1em;
    }
}
@media (max-width: 1300px) {
    .sched-info {
        font-size: 1.5em;
    }
}
@media (max-width: 850px) {
    .sched {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .schedule-column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 1em;

    }
    .sched-info {
        padding-top: 1em;
        font-size: 1em;
    }
}
@media (max-width: 600px) {
    .large-tab-head {
        display: none;
    }
    .small-tab-head {
        display: flex;
    }
}
@media (max-width: 450px) {
    .schedule-column img {
        width: 10em;
    }  
}
</style>
