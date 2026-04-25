import { defineStore } from 'pinia'

export const useCatStore = defineStore('cat', {
  state: () => {
    return {
      name: 'Whiskers',
      level: 1,
      exp: 0,
      maxExp: 100,
      health: 50,
      maxHealth: 100,
      mood: 'neutral',
      favoriteFood: 'tuna',
      inventory: {
        tuna: 10,
        treats: 10,
        yarn: 8,
        toyMouse: 5,
      },
    }
  },

  getters: {
    healthPercent: (state) => (state.health / state.maxHealth) * 100,

    expToNextLevel: (state) => state.maxExp - state.exp,

    expProgress: (state) => (state.exp / state.maxExp) * 100,

    moodDescription: (state) => {
      const moods = {
        neutral: 'Neutral',
        happy: 'I Feel Happy!',
        ecstatic: 'I am Ecstatic!!',
      }
      return moods[state.mood] || 'Normal'
    },
  },

  actions: {
    updateMood(newMood) {
      this.mood = newMood
    },

    applyLevelUp() {
      while (this.exp >= this.maxExp) {
        this.level++
        this.exp = 0
        this.maxExp = Math.floor(this.maxExp * 1.05)
        this.health = Math.min(this.maxHealth, this.health + 10)
        this.updateMood('happy')
      }
    },

    feed(item) {
      if (this.inventory[item] <= 0) return

      this.inventory[item] -= 1

      let healthGain = 10
      if (item === 'tuna') healthGain = 25
      if (item === 'treats') healthGain = 15

      this.health = Math.min(this.maxHealth, this.health + healthGain)

      if (item === this.favoriteFood) {
        this.updateMood('ecstatic')
        this.gainExp(20)
      } else {
        this.gainExp(10)
      }

      if (this.health > 70) this.updateMood('happy')
    },

    gift(item) {
      if (this.inventory[item] <= 0) return

      this.inventory[item] -= 1

      let expGain = 15
      let moodBoost = 'happy'

      if (item === 'yarn') {
        expGain = 20
        moodBoost = 'ecstatic'
      }
      if (item === 'toyMouse') {
        expGain = 25
        moodBoost = 'ecstatic'
      }

      this.gainExp(expGain)
      this.updateMood(moodBoost)
    },

    gainExp(amount) {
      this.exp += amount
      this.applyLevelUp()
    },

    forceLevelUp() {
      this.gainExp(this.expToNextLevel)
    },

    resetGame() {
      this.$patch({
        level: 1,
        exp: 0,
        maxExp: 100,
        health: 50,
        mood: 'neutral',
        inventory: { tuna: 10, treats: 10, yarn: 8, toyMouse: 5 },
      })
    },
  },
})
