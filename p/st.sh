#wget http://lynas.github.io/p/openshiftStartup.sh

cd $OPENSHIFT_DATA_DIR
export JAVA_HOME=/etc/alternatives/java_sdk_1.8.0 
export PATH=$JAVA_HOME/bin:$PATH


wget http://www.eu.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.zip

unzip apache-maven-3.3.9-bin.zip 

export M2_HOME=$OPENSHIFT_DATA_DIR/apache-maven-3.3.9
export PATH=$M2_HOME/bin:$PATH

mkdir -p $OPENSHIFT_DATA_DIR/.m2
export MAVEN_OPTS="-Dmaven.repo.local=$OPENSHIFT_DATA_DIR/.m2"


#cd $OPENSHIFT_REPO_DIR
#java -jar target/*.jar --server.port=${OPENSHIFT_DIY_PORT} --server.address=${OPENSHIFT_DIY_IP}

