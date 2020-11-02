## Keepr

<img class="img-responsive" src="https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80">

Keepr is a social network that allows users to visually share and discover new interests by posting images or videos that can be "kept" in a collection by those who like the content.

> A collection(`vault`) of posts(`keeps`) with a common theme.

Users can view the profiles of other users to see

- The users name and profile image
- Their public collection of `vaults`
- `Keeps` the user has created

Keepr is a typical project where some of the basic layouts have been thought up and the data objects determined. However, implementation of this code is yet to be done. The basic idea is users can browse all of the items (aka `Keeps`) that have been posted without having to login, and post items if they are logged in. If any user wants to store a reference to any particular keep they will store it in the `vault` of their choice. Users can have many vaults, and vaults can be set as public or private.

When a user clicks on a keep from the main page the `keep` should be opened up in a more detailed view (i.e. modal see Mock) where they can then choose to add it to one of their `vault`s.

Vaults themselves are relatively straight forward. They only require a `Name`, `Description`, and `IsPrivate` properties. This object will then be used as a part of a relationship to find all the `keep`s that have been added to it.

For example I may really like game art and thus:

> As a user I can create a `vault` named **_Sweet Game Art_** so that I can have a collection to store the `keep`s I like.

Lastly I can view other members profiles to see all the `vault`s and `keep`s they have created _(only the public vaults of other users)_, and look at the `keep`s in each of their `vault`s.

### Business Rules and Functionality

We want give users some credit for creating excellent `keep`s to do that you will want to set up a way to keep track of the number of times a keep has been viewed, and how many times it has been added to any vault. (as a stretch goal, when it is removed this count should be updated to go down as well).

Due to the privacy of our users, Vaults marked private may only be retrieved by the user who created the vault, there are a few places you will want to make a check on what vaults should be returned.
