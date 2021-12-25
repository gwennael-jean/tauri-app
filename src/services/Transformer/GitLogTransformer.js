class GitLogTransformer {

    transform(value) {
        let commits = [];

        let commitRows = value.split('\n');

        commitRows.forEach(commitRow => {
            commits.push(this._parseCommit(commitRow));
        });

        return commits;
    }

    _parseCommit(commitRow) {
        let commitValues = commitRow.split('\t');

        let commit = {
            hash: commitValues[0],
            parent: commitValues[1],
            author_name: commitValues[2],
            author_email: commitValues[3],
            subject: commitValues[4],
            date: commitValues[5],
            refs: commitValues[6],
            head: false,
        };

        if (commit.refs.includes('HEAD -> ')) {
            commit.head = true;
            commit.refs = commit.refs.replace('HEAD -> ', '');
        }

        if (commit.refs.length) {
            commit.refs = commit.refs.split(', ');
        }

        return commit;
    }
}

const gitLogTransformer = new GitLogTransformer();

export default gitLogTransformer;
