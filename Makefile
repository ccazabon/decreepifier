packages:
	rm -f dist/decreepifier.zip
	zip dist/decreepifier.zip --no-dir-entries --junk-paths --compression-method=deflate decreepifier/*
