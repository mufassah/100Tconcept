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
