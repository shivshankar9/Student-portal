## Contributing

**1.** Fork the repository.

**2.** Clone your forked copy of the project into your local system.

```
git clone https://github.com/<your_name>/<repository_name>.git
```

**3.** Navigate to the project directory. 📁

```
cd <repository_name>
```

**4.** Add a reference (remote) to the original repository.

```
git remote add upstream https://github.com/<your_name>/<repository_name>
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

**9.** Track your changes. ✔️

```
git add .
```

**10.** Commit your changes.

```
git commit -m "a Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repository.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repository you are supposed to make a PR to.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.

**15.** Voila! You have made a PR to the project. Sit back and relax while your PR is reviewed by the maintainers..
