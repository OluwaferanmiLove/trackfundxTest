export interface UserModel {
  login: string | undefined;
  id: number | undefined;
  node_id: string | undefined;
  avatar_url: string | undefined;
  gravatar_id: string | undefined;
  url: string | undefined;
  html_url: string | undefined;
  followers_url: string | undefined;
  following_url: string | undefined;
  gists_url: string | undefined;
  starred_url: string | undefined;
  subscriptions_url: string | undefined;
  organizations_url: string | undefined;
  repos_url: string | undefined;
  events_url: string | undefined;
  received_events_url: string | undefined;
  type: string | undefined;
  site_admin: boolean | undefined;
  name: string | undefined;
  company: string | undefined;
  blog: string | undefined;
  location: string | undefined;
  email: string | undefined;
  hireable: string | undefined;
  bio: string | undefined;
  twitter_username: string | undefined;
  public_repos: number | undefined;
  public_gists: number | undefined;
  followers: number | undefined;
  following: number | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
}