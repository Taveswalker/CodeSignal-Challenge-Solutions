//top js answer is 4 chars shorter

knapsackLight2 = (o, t, m) =>
    o+t<=m ? 'both' : o<=m ? t<=m ? 'either' : 'first' : t<=m ? 'second' : 'none'

