import { OneSignal } from 'react-native-onesignal'

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag('user_email', email)
}

export function tagUserEmailCreateMany() {
  OneSignal.User.addTags({
    user_name: 'João Pedro',
    user_email: 'jfernandees002@gmail.com',
    plano: 'B'
  })
}

export function tagUserEmailRemove() {
  OneSignal.User.removeTag('user_email')
}